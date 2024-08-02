class Queue {
  constructor(maxSize = 100) {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = maxSize;
  }

  // Add an item to the end of the queue.
  enqueue(item) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail % this.maxSize] = item;
    this.tail++;
    return true;
  }

  // Remove the first element from the queue.
  // To actually remove items from the array to free up memory, we can use Array.shift() to free up memory but keep in mind that it has a time complexity of O(n) for each dequeue operation because it has to shift all remaining elements in the array
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.queue[this.head % this.maxSize];

    // Items are not physically removed from the queue array; instead, the head pointer is incremented to logically remove items
    this.head++;
    return item;
  }

  // Get the value of the first element in the queue.
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.head % this.maxSize];
  }

  // Get the length of the queue.
  getLength() {
    return this.tail - this.head;
  }

  // Check if the queue is empty.
  isEmpty() {
    return this.getLength() === 0;
  }

  // Check if the queue is full.
  isFull() {
    return this.getLength() === this.maxSize;
  }
}

module.exports = Queue;
