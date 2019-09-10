'use strict';

const PseudoQueue = require('../stacks-and-queues');

describe('Stacks and Queues',()=>{

 it('should add a new node at the end',()=>{
   const pseudoQueue = new PseudoQueue();
   pseudoQueue.enqueue(12);
   pseudoQueue.enqueue(20);
   pseudoQueue.enqueue(19);
   expect(pseudoQueue.size).toEqual(3);
   expect(pseudoQueue.first.value).toEqual(19);
 });

 it('will remove the node at the end',()=>{
   const pseudoQueue = new PseudoQueue();
   pseudoQueue.enqueue(25);
   pseudoQueue.enqueue(20);
   pseudoQueue.enqueue(15);
   pseudoQueue.enqueue(5);
   pseudoQueue.dequeue();
   expect(pseudoQueue.last.value).toEqual(25);
 })
})