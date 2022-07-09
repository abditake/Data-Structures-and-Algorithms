'use strict';

const { breadthFirst } = require('../tree-breadth-first/index');
const { treeFizzBuzz, Node, BinaryTree } = require('./fizz-buzz');



describe('BinaryTree Tests', () => {
  test('can create a BinaryTree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toEqual(null);
  });
  test('can create add to BinaryTree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    expect(tree.root.value).toEqual(1);
  });
  test('can traverse breadthFirst', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    let breadthFuncArr = breadthFirst(tree);
    let a = tree.root.value;
    let b = tree.root.left.value;
    let c = tree.root.right.value;
    let breadthArr = [a, b, c];

    expect(breadthArr).toEqual(breadthFuncArr);
  });

  test('can return an array that displays the fizz-buzz conditions', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(15);
    tree.root.right.right = new Node(29);

    let fizzBuzzArr = treeFizzBuzz(tree);

    let a = tree.root.value;
    let b = tree.root.left.value;

    let d = tree.root.left.left.value;

    let g = tree.root.right.right.value;

    let arr = [a, b, 'Fizz', d, 'Buzz', 'FizzBuzz', g];
    expect(arr).toEqual(fizzBuzzArr);
  });
});
