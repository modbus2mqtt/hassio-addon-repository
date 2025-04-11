# How to create and install self signed certificates for homeassistant
# Why?
You can use self signed certificates to establish https connections in your local network.
e.g https://homeassistant.lan:8123
# What is ssl?
I don't know exactly, but this is how it works:
On the web server there are two files:
1. A key file
2. A certificate file
The web browser has a matching "CA root certificate". It is used to validate the server certificate during ssl communication.
You can use the root certificate for multiple servers.
# Let's get started:
1. Create a CA key file. It contains a secret key to be used to sign server certificates
2. Create a CA public file. It contains a root certificate for the browser.

The following script creates a secret keyfile named ca-lan.key. It should only be used to create server certificates and it should kept secret!
It creates a ca-lan.csr certificate file to import in the browsers certificate store or into the system certificate store, if your operating sytem supports it.
   ```
   #!/bin/sh

# Generate root ca
openssl req -new -sha256 -nodes -newkey rsa:4096 -keyout ca-lan.key -out ca-lan.csr
openssl x509 -req -sha256 -extfile x509.ext -extensions ca -in ca-lan.csr -signkey ca-lan.key -days 1095 -out ca-lan.pem

openssl x509 -text -in ca-lan.pem
# check if CA: True is in the file
```
3. Create a server certificate to be installed on the web server
4. Create a secret key files to be installed on the web server

The following script creates the files
Parameter are hostname and ip address.
The files to be used are ${name}-fullchain.pem and cert-${name}.key
```
#!/bin/sh
echo $#
if [ $# -lt 2 ]; then echo "Usage: $0 <servername> <ip address>" >/dev/stderr && exit 2; fi
name=$1
ip=$2
echo $name
echo $ip
echo 'Country="DE"'
echo 'Organisation=" "'
echo 'Your Name=${name}

openssl req -new -sha256 -nodes -newkey rsa:4096 -keyout cert-${name}.key -out cert-${name}.csr
cat x509.ext >extfile.cnf
echo "subjectAltName = DNS:${name},DNS:${name}.lan,IP:${ip}" >>extfile.cnf

openssl x509 -req -sha256 -CA ca-lan.pem -CAkey ca-lan.key -days 3650 -CAcreateserial -CAserial ca-lan.srl -extfile  extfile.cnf -extensions server -in cert-${name}.csr -out cert-${name}.pem
cp cert-${name}.pem ${name}-fullchain.pem
cat ca-lan.pem >>${name}-fullchain.pem
```
For homeassistant you copy the files to the ssl directory.
in configuration.yaml you need to configure a http entry like this:
```
http:
  server_port: 8123
  ssl_certificate: /ssl/homeassistant-fullchain.pem
  ssl_key: /ssl/cert-homeassistant.key
```

This is just a very brief description. There are much more information about this 
Keywords for searching:
openssl x509, tls, https




