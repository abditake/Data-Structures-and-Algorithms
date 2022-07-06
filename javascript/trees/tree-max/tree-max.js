'use strict';



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

  findMax() {
    let maxValue = 0;
    const traverse = (node) => {
      if (maxValue < node.value) {
        maxValue = node.value;
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    // recursive stuff
    traverse(this.root);
    return maxValue;
  }
}

let tree  = new BinaryTree();

tree.root = new Node(10);
tree.root.left = new Node(49);
tree.root.right = new Node(20);


let preOrder = tree.findMax();

console.log(preOrder);

module.exports = {
  BinaryTree,
  Node
};
