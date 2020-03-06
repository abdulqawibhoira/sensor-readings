const MQTT = require("async-mqtt");
const { promisify } = require('util');
const { gzip } = require('zlib');
const gzipAsync = promisify(gzip);

const client = MQTT.connect("mqtt://localhost:3333");

const sendReadings = async function (queue) {
    let item = null;

    while (item = queue.dequeue()) {
        try {
            await publishMessage(item);
        }
        catch (err) {
            console.log(err.stack);
        }
    }
};

const publishMessage = async function (item) {
    await timeOutPromise();

    const buffer = await gzipAsync(item);

    await client.publish('sensorReadings', buffer);
};


const timeOutPromise = function () {
    return new Promise((resolve) => {
        setTimeout(resolve, Math.floor(Math.random() * 1000));
    });
};

module.exports = sendReadings;