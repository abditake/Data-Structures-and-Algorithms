'use strict';

const { breadthFirst, Node, BinaryTree } = require('./index');



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
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);

    let breadthFuncArr = breadthFirst(tree);

    let a = tree.root.value;
    let b = tree.root.left.value;
    let c = tree.root.right.value;
    let d = tree.root.left.left.value;
    let e = tree.root.left.right.value;
    let f = tree.root.right.left.value;
    let g = tree.root.right.right.value;

    let breadthArr = [a,b,c,d,e,f,g];

    expect(breadthArr).toEqual(breadthFuncArr);
  });
});
