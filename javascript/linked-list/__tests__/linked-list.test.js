'use strict';

let { LinkedList, Node } = require('../index');

describe('Testing Linked List', () => {
  test('should create linked list ', () => {
    let list = new LinkedList();
    expect(list).toBeTruthy();
  });

  test('can Add value into linked list', () => {
    let node = new Node(6);
    let list = new LinkedList();
    list.head = node;
    expect(list.head).toEqual(node);
  });

  test('head property points to head node', () => {
    let list = new LinkedList();
    list.head = new Node(10);
    list.head.next = new Node(11);
    expect(list.head.val).toEqual(10);
  });
})