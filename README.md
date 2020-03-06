# Sensor Readings 

To run this Project, running MQTT message broker is required. add your MQTT broker endpoint in app/config/config.js file.

**To run a Client**

```
npm run startClient
```

**To run a Server**

```
npm run startServer
```

**To run tests**

```
npm test
```

## Why MQTT ?

MQTT is a machine-to-machine connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport. It is useful for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium. It is also ideal for mobile applications because of its small size, low power usage, minimised data packets, and efficient distribution of information to one or many receivers.

Desription of MQTT itself answers why MQTT is ideal solution to send sensor readings as client and server are seperated by a connection with limited bandwidth.


