class Queue {
  constructor(maxSize = 100) {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = maxSize;
    // !Note: here we will use Modulo Operation during enqueue and dequeue operations to ensure that the head/tail wraps up to the start of array once it reaches the end.
  }

  // Enqueue Operation: The tail pointer indicates (logically) the position where the next element should be inserted.
  enqueue(item) {
    if (this.isFull()) {
      return false;
    }
    /* 
    For e.g. if maxSize is 100:
    - if tail is at 0 then 3 % 100 = 0
    - if tail is at 3 then 3 % 100 = 3
    - if tail is at 27 then 27 % 100 = 27
    - if tail is at 100 then 3 % 100 = 0
    - if tail is at 101 then 3 % 100 = 1 and so on...
    */
    this.queue[this.tail % this.maxSize] = item;
    this.tail++;
    return true;
  }

  // Dequeue Operation: The head pointer indicates (logically) the position from where the next element should be removed.
  // Note: To actually remove items from the array to free up memory, we can use Array.shift()but keep in mind that it has a time complexity of O(n) for each dequeue operation because it has to shift all remaining elements in the array.
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    /* 
    For e.g. if maxSize is 100:
    - if head is at 0 then 3 % 100 = 0
    - if head is at 3 then 3 % 100 = 3
    - if head is at 27 then 27 % 100 = 27
    - if head is at 100 then 3 % 100 = 0
    - if head is at 101 then 3 % 100 = 1 and so on...
    */
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
