const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    
    return this.head;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    let node = new ListNode(value)

    if(!this.head) {
      this.head = node;
    } else {
      let mark = this.head;
      while(mark.next) {
        mark = mark.next;
      }
      mark.next = node;
    }

  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    let res = this.head.value; 
    this.head = this.head.next;
    return res
      
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log( queue.enqueue(3));
console.log(queue.dequeue());
module.exports = {
  Queue
};
