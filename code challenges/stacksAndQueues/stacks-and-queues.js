'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

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

let myStack = new Stack();
myStack.enqueue(1);
myStack.enqueue(2);
myStack.enqueue(3);
myStack.dequeue();

console.log(myStack);
console.log(myStack.dequeue());
