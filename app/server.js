const MQTT = require("async-mqtt");
const { promisify } = require('util');
const { unzip } = require('zlib');
const unzipAsync = promisify(unzip);
const config = require("./config/config")();

const client = MQTT.connect(config.mqttBrokerURL);

client.on('error', (err) => {
    console.log(err.stack);
    process.exit();
});

const fetchReadings = async () => {
    await client.subscribe("sensorReadings");

    client.on("message", async (topic, message) => {
        try {
            const reading = await unzipAsync(message);

            console.log(reading.toString());
        }
        catch (err) {
            console.log(err.stack);
        }
    });
};

fetchReadings();