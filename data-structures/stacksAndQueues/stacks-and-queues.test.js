'use strict';

const Stack = require('./stacks-and-queues.js').Stack;
const Queue = require('./stacks-and-queues.js').Queue;

describe('Stack tests', () => {

  it('Can push things (single/multiple) on to the stack', () =>{
    let stack = new Stack ();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek()
    expect(stack.peek()).toBe(15);
  });

  it('Can pop things off the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek();
    expect(stack.peek()).toBe(stack.pop())
  });

  it('can empty a stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.pop();
    expect(stack.peek()).toBeFalsy()
  })

  it('can peek (it already can I used it for testing', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek();
    expect(stack.peek()).toBe(15)
  });
});

describe('queue tests', () => {
  it('Can instantiate a queue', () => {
      let newQ = new Queue();
      expect(newQ.showQueue()).toStrictEqual([])
  });

  it('Can successfully enqueue into a queue', () => {
      let newQ = new Queue();
      newQ.enqueue(5);
      newQ.enqueue(10);
      newQ.enqueue(15);
      newQ.enqueue(20);
      expect(newQ.showQueue()).toStrictEqual([5,10,15,20])
  });
  it('Can successfully enqueue multiple values into a queue', () => {
      let newQ = new Queue();
      newQ.enqueue(5);
      newQ.enqueue(10);
      newQ.enqueue(15);
      newQ.enqueue(20);
      expect(newQ.showQueue()).toStrictEqual([5,10,15,20])
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
      let newQ = new Queue();
      newQ.enqueue(5);
      newQ.enqueue(10);
      newQ.enqueue(15);
      newQ.enqueue(20);
      newQ.dequeue()
      expect(newQ.dequeue()).toStrictEqual(10)
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
      let newQ = new Queue();
      newQ.enqueue(5);
      newQ.enqueue(10);
      newQ.enqueue(15);
      newQ.enqueue(20);
      expect(newQ.peek()).toBe(5);
  })
  it('Can successfully empty a queue after multiple dequeues', () => {
      let newQ = new Queue();
      newQ.enqueue(5);
      newQ.enqueue(10);
      newQ.dequeue();
      newQ.dequeue();
      expect(newQ.front).toBeNull();
  });
  it('Can successfully instantiate an empty queue', () => {
      let newQ = new Queue();
      expect(newQ.front).toBeNull();
  })
})