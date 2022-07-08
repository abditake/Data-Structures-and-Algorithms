"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {
  constructor() {
    this.root = null;
  }
}


function breadthFirstSearch(tree){
  let queue = [];
  let result = [];
  let current = null;

  queue.push(tree.root);

  while (queue.length > 0) {
    current = queue.shift();
    result.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  console.log(result);
}


let tree = new BinaryTree();



tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);


tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);


breadthFirstSearch(tree);



