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
}



function treeFizzBuzz(tree) {

  let queue = [];
  let result = [];
  let current = null;

  queue.push(tree.root);

  while (queue.length > 0) {
    current = queue.shift();
    if(current.value % 3 === 0 && current.value % 5 === 0){
      result.push('FizzBuzz');
    }
    else if(current.value % 5 === 0){
      result.push('Buzz');
    }else if(current.value % 3 === 0){
      result.push('Fizz');
    }else{
      result.push(current.value);
    }
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
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(15);
tree.root.left.left = new Node(25);
tree.root.left.right = new Node(10);
tree.root.left.left.left = new Node(123);
tree.root.left.left.right = new Node(12123);
tree.root.left.right.left = new Node(1233);
tree.root.left.right.right = new Node(1241213);



treeFizzBuzz(tree);

