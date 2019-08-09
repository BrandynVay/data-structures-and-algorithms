'use strict';

class Node {
  constructor (val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor (root = null) {
    this.root = root;
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

  bredthFirst() {
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


}

let two = new Node(2);
let seven = new Node(7);
let five = new Node(5);
let twoSquared = new Node(2);
let six = new Node(6);
let nine = new Node(9);
let fiveSquared = new Node(5);
let eleven = new Node(11);
let four = new Node(4);

two.left = seven;
two.right = five;
seven.left = twoSquared;
seven.right = six;
five.right = nine;
six.left = fiveSquared;
six.right = eleven;
nine.right = four;

let tree = new BinaryTree(two);
console.log(tree);
console.log('tree preOrder :', tree.preOrder());
console.log('tree postOrder :', tree.postOrder());
console.log('tree inOrder :', tree.inOrder());
console.log('Breadth First :', tree.bredthFirst());

it('can successfully return a collection from a breadth-first traversal', () => {
  let tree = new BinaryTree(2);
  tree.add(7);
  tree.add(5);
  tree.add(2);
  tree.add(6);
  tree.add(9);
  tree.add(5);
  tree.add(11);
  tree.add(4);
  let treeArray = tree.breadthFirst();
  expect(treeArray).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
});
