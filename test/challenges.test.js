describe("Sanity Check", () => {
    it("test returns 1 unless insane.", () => {
        assert.equal(sanityCheck(), 1);
    });
});

describe("Data Structures", () => {
    describe("Stack", () => {
        it("should instantiate an empty stack.");
        it("should push a node to empty stack.");
        it("should pop node from stack.");
        it("should peek at node on top of stack.");
        it("should push node and then retrieve it using peek.");
        it("should return -1 when pop is called on empty stack.");
    });
    describe("Queue", () => {
        it("should instantiate an empty queue.");
        it("should push a node to empty queue.");
        it("should pop node from queue.");
        it("should peek at node on top of queue.");
        it("should push node and then retrieve it using peek.");
        it("should return -1 when pop is called on empty queue.");
    });
    describe("Linked List", () => {
        it("should instantiate an empty list.");
        it("should append a new node to an empty list.");
        it("should push a new node to an empty list.");
        it("should pop existing node from end of list.");
        it("should remove node from head of list.");
        it("should find a node with a specified value.");
        it("should delete first instance of a node with a specified value.");
    });
});

describe("Algorithms", () => {
    describe("ReverseString", () => {
        it("should reverse a string.");
    });
});