const queue = require("../../lib/queue");

describe("Implementation of queue", () => {
    const testQueue = new queue();

    test("enqueue - Check Value", () => {
        testQueue.enqueue("a");
        
        expect(testQueue.data).toContain("a");
    });

    test("enqueue - Check length", () => {
        expect(testQueue.data.length).toBe(1);
    });


    test("enqueue - Check length 2", () => {
        testQueue.enqueue("b");

        expect(testQueue.data.length).toBe(2);
    });

    test("dequeue - Check popped value ", () => {
        const item = testQueue.dequeue();

        expect(item).toMatch("a");
    });

    test("dequeue - Check length ", () => {
        expect(testQueue.data.length).toBe(1);
    });

    test("dequeue - Check length ", () => {
        testQueue.dequeue();

        const item = testQueue.dequeue();

        expect(item).toBeFalsy();
    });

});


