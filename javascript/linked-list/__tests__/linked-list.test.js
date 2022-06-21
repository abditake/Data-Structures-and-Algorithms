'use strict';

const Node = require('../index');

const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list).toBeTruthy();
  });

  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('node');
    expect(list.head.value).toEqual('node');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();

    linkedList.insert(14);
    linkedList.insert(15);
    linkedList.insert(90);
    linkedList.insert(20);

    expect(linkedList.head.value).toEqual(14);
    expect(linkedList.head.next.value).toEqual(15);
    expect(linkedList.head.next.next.value).toEqual(90);
    expect(linkedList.head.next.next.next.value).toEqual(20);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();

    list.insert(18);
    list.insert(30);

    const result = list.includes(30);
    expect(result).toEqual(true);

  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();

    list.insert(15);
    list.insert(40);
    list.insert(45);

    const result = list.includes(42);
    expect(result).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const result = [];
    const list = new LinkedList();

    list.insert(35);
    list.insert(45);
    list.insert(13);
    list.insert(9);
    list.insert(23);

    result.push(list);

    expect(result).toEqual([list]);
  });

  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();

    list.insert(30);
    list.insert(45);

    list.append(16);

    expect(list.head.value).toEqual(30);
    expect(list.head.next.next.value).toEqual(16);
  });
});
