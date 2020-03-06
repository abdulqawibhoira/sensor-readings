const MQTT = require("async-mqtt");

// Create Mock MQTT Client Object
jest.mock("async-mqtt");
// fake Connection to MQTT
MQTT.connect.mockReturnValue({ publish: () => { } });

const sendReadings = require("../../lib/sendReadings");
const queue = require("../../lib/queue");

describe("Send Readings Handling Test", () => {
    const fakeQueue = new queue();
    fakeQueue.enqueue("a");
    fakeQueue.enqueue("b");
    fakeQueue.enqueue("b");

    test('Send Readings', async () => {
        expect.assertions(1);

        try {
            await sendReadings(fakeQueue);

            expect(true).toBeTruthy();
        }
        catch (err) {
            expect(err).toMatch('error');
        }

    });
});

