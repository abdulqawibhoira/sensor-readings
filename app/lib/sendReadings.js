const MQTT = require("async-mqtt");
const { promisify } = require('util');
const { gzip } = require('zlib');
const gzipAsync = promisify(gzip);
const config = require("../config/config")();

const client = MQTT.connect(config.mqttBrokerURL);

const sendReadings = async function (queue) {
    let item = null;

    while (item = queue.dequeue()) {
        try {
            // waiting for a single message to publish to guarantee a sequence of the sensor-readings. 
            // without await sequence will be compromised

            await publishMessage(item);
        }
        catch (err) {
            console.log(err.stack);
        }
    }
};

const publishMessage = async function (item) {
    // setting timeout to send events at random intervals.

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