const readline = require('readline');
const fs = require('fs');
const queue = require("./lib/queue");
const sendReadings = require("./lib/sendReadings");

const readData = () => {

	const readLineInterface = readline.createInterface({
		input: fs.createReadStream('../sensorReadings.txt')
	});

	const readingsQueue = new queue();

	readLineInterface.on('line', (line) => {
		readingsQueue.enqueue(line);
	});

	readLineInterface.on('close', () => {
		sendReadings(readingsQueue);
	});

};

readData();