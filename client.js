const MQTT = require("async-mqtt");
const readline = require('readline');
const fs = require('fs');
const { promisify } = require('util');
const { gzip } = require('zlib');
const gzipAsync = promisify(gzip);

const client = MQTT.connect("mqtt://localhost:3333");

const readData = () => {

	const readLineInterface = readline.createInterface({
		input: fs.createReadStream('./readings.txt')
	});

	readLineInterface.on('line', async (line) => {
		try {
			const buffer = await gzipAsync(line);
			
			await client.publish('readings', buffer);

		} catch (err) {
			console.log(e.stack);
		}
	});

};

readData();