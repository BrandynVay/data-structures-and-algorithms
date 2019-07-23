'use strict';

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class PseudoQueue {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if(!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
  }

  dequeue() {
    if(!this.first) { 
      return null;
    }
    let node = this.first
    if(!node.next) {
      node = node.next;
      this.first = node;
    } else {
      this.first = null;
      this.last = null;
    }
    this.size--;
  }
}

let myQueue = new PseudoQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();

console.log(myQueue);
console.log(myQueue.dequeue());
