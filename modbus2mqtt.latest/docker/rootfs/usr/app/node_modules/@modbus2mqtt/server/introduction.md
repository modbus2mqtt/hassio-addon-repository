# **Modbus2mqtt**
## **Introduction**
In this document gives an overview about modbus2mqtt.

Modbus2mqtt  is an application to read data from multiple modbus devices and publish it to MQTT. A modbus device is called slave where as modbus2mqtt is the master.

Modbus2mqtt uses standardized specifications which can either be provided by the community or created using the modbus2mqtt web UI. They describe the mapping and/or conversion from modbus data to mqtt data.

Modbus2mqtt supports Homeassistant MQTT discovery to enable a simple integration of the data to a lot of smart home systems.
### **What is modbus**
Modbus is a protocol. It is supported by a wide range of devices. E.g. solar inverter, heat pumps, energy meter …

It supports receiving and sending integer values to and from the device either by wire (modbus RTU) or by network (modbus TCP).

modbusRTU is based on RS485.

The following documents describe modbus protocol in more detail.  
### **What is RS485**
RS485 is a 3-wire bus system. It requires Hardware on the master side. E.g an usb-stick (img)

wiring img will follow

The following documents describe RS485
[Wikipedia](https://en.wikipedia.org/wiki/RS-485)
[Short description](https://www.seeedstudio.com/blog/2021/03/18/how-rs485-works-and-how-to-implement-rs485-into-industrial-control-systems/)

### **What is mqtt**
MQTT is a Internet of Things (IoT) protocol supported by nearly all smart home applications. It acts as a broker between data provider and data receiver.
### **Modbus2mqtt**
Modbus2mqtt polls data from modbus and propagates it using mqtt publish. Additionally, it publishes meta data for smart home systems (MQTT discovery) to enable these systems to use the data provided by the modbus devices.

More details about mqtt discovery can be found here:[Home Assistant MQTT discovery](https://www.home-assistant.io/integrations/mqtt/#mqtt-discovery)
#### **Features**
- MQTT discovery

  Home Assistant discovery

  Other supported platforms

- MQTT publish to provide read only data to smart home systems
- MQTT subcribe to control the modbus device via smart home.


More details are described in chapter Configuration
### **Installation**
There are three options for installation:
- Install in Homeassistant Supervisor (recommended)
- Run in a Docker image
- Run as Node application (not documented yet)

####**Homeassistant Supervisor**
Hardware Requirements:
You need either a Modbus Controller (USB) or
Modbus TCP based devices

**Homeassistant Addons:**
- Mosquitto broker Addon [Addon Information](https://github.com/home-assistant/addons/tree/master/mosquitto)
  - Install the Addon
  - Start it (no configuration is required)
  - Mosbus <=> MQTT from this repository: https://github.com/modbus2mqtt/hassio-addon-repository#release
    - In the Addon Store click on the three dots in the upper right corner
    - Select repositories
    - Add this URL: https://github.com/modbus2mqtt/hassio-addon-repository#release
    - Refresh the Web Page if required
    - install Modbus <=> MQTT
    - start Modbus <=> MQTT (no configuration is required)
    - Open the User Interface for Modbus <=> MQTT to configure your Modbus devices and continue
      with Configuration (next Chapter)
      
**Configure the MQTT Integration**
- in Settings -> Devices & Services -> Integration
  - The MQTT Integration should be discovered, but not configured.
  - Press "Configure" Button of the MQTT Integration
  - Press "OK"
     
### **Configuration**
Modbus2mqtt has a web Web UI to do nearly all required configurations.

Some one time configurations must be done in the modbus2mqtt.yaml file as described in the installation chapter.

We differentiate the following use cases

- Basic functionality ([video](https://youtu.be/6hfeKWM2g8o)))
   - Configure Modbus2mqtt and create a device based on existing specification 
   - Create a device and a derived specification
   - Create a device and a new specification
   - Configure entities
 - Advanced functionalities(video will follow)
   - Contribute specification 
   - Add identification 
   - Add discovery details
   - Add image and document URL

### How Modbus <=> MQTT works

Modbus2mqtt uses the following data structures (entities)

- Device
- Specification
- Entity

They are described in the following chapters:
### **Device**
A device is the representation of a modbus device in modbus2mqtt. It must be created by a modbus2mqtt user and has the following properties

Device name, specification name, modbus RTU connection data: slaveid.

Example:

A  (name:) „Water level transmitter“ has a specification named „Water level transmitter“.

It is connected via ModbusRTU and has the slave id „1“.

There are some more optional attributes for a device. They are for more complex scenarios.
### **Specification**
A specification describes how modbus2mqtt can interact with the modbus device to read and write data. It contains entities(link #entity).

A specification can be provided by the community or by the modbus2mqtt user.

Naturally, the easiest use case consumes community provided specifications.

The chapter Configuration goes into more details.

The specifications from community are able to detect whether a connected modbus device is compatible to the specification.

Example

The specification „Water level transmitter“ has only one entity:

(name:) „Water level“ it represents the water level as a number in „mm“. Since it’s a read only value, the component is  a „sensor“. The modbus device provides this data at address „3“.
1. ### **Entity**
   An entity is a mapping from one or more modbus registers to one mqtt value.

   Most of the entity use one register. Only a text component can use more.

   The main entity properties are:

   modbus address: Address to get the data from modbus device

   component: smart home component as it is defined in home assistant.

   An entity can either be read only or read/writable. If it is read only, the component is a „sensor“ (according to home assistant conventions). In modbus2mqtt there are a few sensor components:

   binary\_sensor for on/off values, text\_sensor for texts, select\_sensor for read only choices and sensor for number values.

   Example

   the entity (name:) „Water level“ it represents the water level as a number in „cm“. Since it’s a read only value, the component is  a „sensor“. The modbus device provides this data at address „3“.

   The modbus data must be multiplicated by 0.01 to get the read value. So, a modbus value of 35 corresponds a value of 0.35 „cm“. So, the „multiplicator“ is „0.01“.


**Run in a Docker image**
This is for experienced users.
- Install docker
  There are several options to install docker. Please refer to the [Docker documentation](https://docs.docker.com/engine/install/)
  - For MacOS and Linux:
  - Open a terminal
  - execute the following steps 
```
   mkdir docker
   cd docker
   curl https://raw.githubusercontent.com/modbus2mqtt/server/main/docker/modbus2mqtt-compose.yaml > compose.yaml
```
  - Create a .env file with this content
```
export CONFIG_ROOT=`pwd`
export PORT_MODBUS2MQTT=<your http port for modbus2mqtt>
export DEVICE_MODBUS=<your path to the RS485 controller>
```
  - replace \<your http port for modbus2mqtt> with a port number to be used for http interface
  - replace \<your path to the RS485 controller> with a path to the RS485 device.
  and store in the directory you created in the previous step
This is an example .env file:
```
export CONFIG_ROOT=`pwd`
export PORT_MODBUS2MQTT=1007
export DEVICE_MODBUS=/dev/serial/by-id/usb-1a86_USB_Serial-if00-port0
```
  - Pull the image and start it using the following command
```
  . ./.env # read environment variables
  docker compose  up -d
```
  - This will startup the docker container.
  Now, you can access it in the browser using http://<your host name>:<your http port for modbus2mqtt>
  - If there are issues, check the log file with
```
  docker log modbus2mqtt
```

