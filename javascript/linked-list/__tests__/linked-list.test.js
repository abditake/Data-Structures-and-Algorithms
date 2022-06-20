'use strict';

let { LinkedList, Node } = require('../index');

describe('Testing Linked List', () => {
  test('should create linked list ', () => {
    let list = new LinkedList();
    expect(list).toBeTruthy();
  });

  test('can insert value into linked list', () => {
    let node = new Node(6);
    let list = new LinkedList();
    list.head = node;
    expect(list.head).toEqual(node);
  });

  test('head property properly points to head node', () => {
    let list = new LinkedList();
    l.head = new Node(10);
    l.head.next = new Node(11);
    expect(l.head.val).toEqual(10);
  });

  test('head property properly append', () => {
    let l = new LinkedList();
    l.head = new Node(10);
    l.head.next = new Node(11);
    l.append(12);
    expect(l.head.next.next.val).toEqual(12);
  });

  test('head property properly insertBefore', () => {
    let l = new LinkedList();
    l.head = new Node(10);
    l.head.next = new Node(11);
    l.insertBefore(11, 8);
    expect(l.head.next.val).toEqual(8);
  });

  test('head property properly insertAfter', () => {
    let l = new LinkedList();
    l.head = new Node(10);
    l.head.next = new Node(11);
    l.insertAfter(11, 8);
    expect(l.head.next.next.val).toEqual(8);
  });

  test('can properly insert multiple nodes', () => {
    let l = new LinkedList();
    l.head = new Node(1);
    l.insertHead(2);
    l.insertHead(3);
    l.insertHead(4);
    l.insertHead(5);
    expect(l.head.next.next.val).toEqual(3);
  });
});