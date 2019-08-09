'use strict';

class Node {
  constructor (val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor() {
    this.root = null;
  }

  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let _walk = (node) => {

      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  inOrder(){
    let results = [];
    let _walk = (node) => {

      if (node.left) { _walk(node.left); }
      results.push(node.value);
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);
    return results;
  }

  breadthFirst() {
    let results = [];
    let queue = [];

    queue.push(this.root);

    while(queue.length) {
      let current = queue.shift();
      results.push(current.value);
      if (current.left) {queue.push(current.left)};
      if (current.right) {queue.push(current.right)};
    };
    return results;
  }

}

class BinarySearchTree {

  constructor (root = null) {
    this.root = root;
  }

  add(value) {
    let current = this.root;
    if(!current){this.root = new Node(value)};
    while (current) {
      if (current.val > value) {
        if (!current.left) {
          current.left = new Node(value);
          break;
        }
        else{current = current.left};
      }

      if (current.val < value) {
        if (!current.right) {
          current.right = new Node(value);
          break;
        }
        else{ current = current.right};
      }
    }
    return this;
  }

  contains(value){
    return this.preOrder().includes(value);
  }

}

// let two = new Node(2);
// let seven = new Node(7);
// let five = new Node(5);
// let six = new Node(6);
// let nine = new Node(9);
// let eleven = new Node(11);
// let four = new Node(4);

// two.left = seven;
// two.right = five;
// seven.left = twoSquared;
// seven.right = six;
// five.right = nine;
// six.left = fiveSquared;
// six.right = eleven;
// nine.right = four;

// let tree = new BinaryTree(two);
// console.log(tree);
// console.log('tree preOrder :', tree.preOrder());
// console.log('tree postOrder :', tree.postOrder());
// console.log('tree inOrder :', tree.inOrder());
// console.log('Breadth First :', tree.breadthFirst());

module.exports =  { BinaryTree, Nodes };
