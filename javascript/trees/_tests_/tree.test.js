const { describe } = require('eslint/lib/rule-tester/rule-tester');
const { BinaryTree, Node } = require('../binaryTree');




describe('Test for Binary Tree', () => {
  test('Binary tree is a class', () => {
    expect(typeof BinaryTree.prototype.constructor).toEqual('function');
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    expect(tree.root.value).toEqual(10);
  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.left = new Node(8);
    tree.right = new Node(98);
    expect(tree.left.value).toEqual(8);
    expect(tree.right.value).toEqual(98);
  });
  test('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.left = new Node(8);
    tree.right = new Node(98);
    let preOrder = tree.preOrder();
    console.log(preOrder);
    expect(preOrder).toEqual([10,8,98]);
  });
  test('Can successfully return a collection from an inorder traversal', () => {
    expect().toEqual();
  });
  test('Returns true	false for the contains method, given an existing or non-existing node value', () => {
    expect().toEqual();
  });
});