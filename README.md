# Home Assistant add-on repository for Modbus <=> MQTT

This repository contains the Modbus <=> MQTT Addon.

## Add-ons

This repository contains the following add-on(s)

### [Modbus<=>MQTT](./modbus2mqtt)

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]
![Supports armhf Architecture][armhf-shield]

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg

## Installation

1. If you don't have an MQTT broker yet; in Home Assistant go to **[Settings → Add-ons → Add-on store](https://my.home-assistant.io/redirect/supervisor_store/)** and install the **[Mosquitto broker](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_mosquitto)** addon.
1. Go back to the **Add-on store**, click **⋮ → Repositories**, fill in</br> `https://github.com/modbus2mqtt/hassio-addon-repository` and click **Add → Close** or click the **Add repository** button below, click **Add → Close** (You might need to enter the **internal IP address** of your Home Assistant instance first).  
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmodbus2mqtt%2Fhassio-addon-repository)
1. Click on the addon and press **Install** and wait till the addon is installed.
1. Start the addon by going to **Info** and click **Start**
1. Wait till **Modbus <=> MQTT** starts and press **OPEN WEB UI** to verify modbus2MQTT started correctly.
   - If it shows `502: Bad Gateway` wait a bit more and refresh the page.
   - If this takes too long (e.g. 2 minutes +) check the **Log** tab to see what went wrong.

For more information see [the documentation](https://github.com/modbus2mqtt/server/blob/master/introduction.md).

## Restoring data from a standalone installation

1. Ensure that both environments are running the same version
2. Backup your standalone environment `data` folder (possibly leaving out the `logs/` folder)
3. Restore your `data` folder contents into `/usr/share/hassio/homeassistant/modbus2mqtt`
4. Start the add-on

## Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).

All notable changes to this project will be documented in the [CHANGELOG.md](https://github.com/modbus2mqtt/server/blob/master/CHANGELOG.md) file.

Version for releases is based on [modbus2MQTT](https://github.com/modbus2mqtt/server) format: `X.Y.Z`.

Any changes on the addon that do not require a new version of modbus2MQTT will use the format: `X.Y.Z-A` where `X.Y.Z` is fixed on the modbus2MQTT release version and `A` is related to the addon.

## Issues

If you find any issues with the add-on, please check the [issue tracker](https://github.com/modbus2mqtt/server/issues) for similar issues before creating one.

Feel free to create a PR for fixes and enhancements.

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
