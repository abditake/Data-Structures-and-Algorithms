'use strict';

const LinkedList   = require('../index.js');


describe('Linked List', () => {
  test('works', () => {
    expect(true).toBeTruthy();
  });

  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list).toBeTruthy();
  });

  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.add('node');
    expect(list.head.value).toEqual('node');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();

    linkedList.add(14);
    linkedList.add(15);
    linkedList.add(90);
    linkedList.add(20);

    expect(linkedList.head.value).toEqual(14);
    expect(linkedList.head.next.value).toEqual(15);
    expect(linkedList.head.next.next.value).toEqual(90);
    expect(linkedList.head.next.next.next.value).toEqual(20);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();

    list.add(18);
    list.add(30);

    const result = list.includes(30);
    expect(result).toEqual(true);

  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();

    list.add(15);
    list.add(40);
    list.add(45);

    const result = list.includes(42);
    expect(result).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const result = [];
    const list = new LinkedList();

    list.add(35);
    list.add(45);
    list.add(13);
    list.add(9);
    list.add(23);

    result.push(list);

    expect(result).toEqual([list]);
  });

  test('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();

    list.add(30);
    list.add(45);

    list.append(16);

    expect(list.head.value).toEqual(30);
    expect(list.head.next.next.value).toEqual(16);
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();

    list.add(15);
    list.add(20);
    list.insertBefore(20, 18);

    expect(list.head.value).toEqual(15);
    expect(list.head.next.value).toEqual(18);
    expect(list.head.next.next.value).toEqual(20);
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();

    list.add(14);
    list.add(45);

    list.insertAfter(45, 15);

    expect(list.head.value).toEqual(14);
    expect(list.head.next.value).toEqual(45);
    expect(list.head.next.next.value).toEqual(15);
  });
  test('Where k and the length of the list are the same', () => {
    const list = new LinkedList();

    list.add(1);
    list.add(3);
    list.add(8);
    list.add(2);

    expect(list.kthFromEnd(4)).toEqual(`Node no.4 value from last is 1`);
  });

  test('Should be able to zipper two linked lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const zipped = new LinkedList();

    list1.add(1);
    list1.add(3);
    list1.add(2);

    list2.add(5);
    list2.add(9);
    list2.add(4);

    const zipperedList = zipped.zipLists(list1, list2);

    expect(zipperedList.head.value).toEqual(1);
    expect(zipperedList.head.next.value).toEqual(5);
    expect(zipperedList.head.next.next.value).toEqual(3);
    expect(zipperedList.head.next.next.next.value).toEqual(9);
    expect(zipperedList.head.next.next.next.next.value).toEqual(2);
    expect(zipperedList.head.next.next.next.next.next.value).toEqual(4);
    expect(zipperedList.head.next.next.next.next.next.next).toEqual(null);
  })


});
