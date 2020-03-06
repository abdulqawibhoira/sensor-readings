const readline = require('readline');
const fs = require('fs');
const queue = require("./lib/queue");
const sendReadings = require("./lib/sendReadings");
const config = require("./config/config")();

const readData = () => {

	const readLineInterface = readline.createInterface({
		input: fs.createReadStream(config.readingsFilePath)
	});

	const readingsQueue = new queue();

	readLineInterface.on('line', (line) => {
		// adding readings into the queue to send them SEQUENTIALLY at random intervals

		readingsQueue.enqueue(line);
	});

	readLineInterface.on('close', () => {
		sendReadings(readingsQueue);
	});

};

readData();