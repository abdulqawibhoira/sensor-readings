class queue {
    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
    }

    dequeue() {
        if (!this.data.length) {
            return false;
        }

        return this.data.shift();
    }
}

module.exports = queue;