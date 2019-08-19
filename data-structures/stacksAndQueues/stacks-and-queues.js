'use strict'

class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  };
};

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
  };

  push(value) {
    this.top = new Node(value, this.top);
  };

  pop() {
    //assign temp value;
    let temp = this.top;
    //reassign top to top.next
    this.top = this.top.next;
    //set old top.next = null;
    temp.next = null;
    //return this.top.value
    return temp.value;
  };

  peek() {
    if(this.top){
    return this.top.value;
    }
    else{return null}
  };
};

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  };
  
  enqueue(value) {
    let newNode = new Node(value);
    if(this.rear){this.rear.previous = newNode;}
    this.rear = newNode;
    if(!this.front){this.front = newNode;}
  };

  dequeue() {
    let oldFront = this.front;
    if(this.front){this.front = this.front.previous};
    if(oldFront){oldFront.previous = null;}
    return oldFront ? oldFront.value : null;
  };

  peek() {
    return this.front ? this.front.value : null;
  };

  // this is a utility function for testing, not for Datastructure use
  showQueue() {
    let que = [];
    let current = this.front;
    while (current) {
      que.push(current.value);
      current = current.previous
    };
    return que;
  }
};

module.exports = {Stack, Queue};
