const MQTT = require("async-mqtt");
const { promisify } = require('util');
const { unzip } = require('zlib');
const unzipAsync = promisify(unzip);

const client = MQTT.connect("mqtt://localhost:3333");

const fetchReadings = async () => {
    await client.subscribe("readings");

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