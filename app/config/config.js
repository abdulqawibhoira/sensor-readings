const config = {
    ENV: process.env.NODE_ENV || "STAGING",
    PROD: {
        readingsFilePath: `${__dirname}/../sensorReadings.txt`,
        mqttBrokerURL: "mqtt://localhost:3333"
    },
    STAGING: {
        readingsFilePath: `${__dirname}/../../sensorReadings.txt`,
        mqttBrokerURL: "mqtt://localhost:3333"
    },
    test: {
        readingsFilePath: `${__dirname}/../../sensorReadings.txt`,
        mqttBrokerURL: "mqtt://localhost:3333"
    }
}

module.exports = function () {
    return config[config.ENV];
};