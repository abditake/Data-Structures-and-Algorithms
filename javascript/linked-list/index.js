'use strict';



class Node {
  constructor(value) {
    this.value = value;
    this.next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }


  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log('done traversing');
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }


    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }


  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let stringArr = [];
    let string = '';

    if (!current) {
      return 'List is Empty';
    }
    while (current) {
      stringArr.push(current.value);
      current = current.next;
    }
    stringArr.forEach((val) => {
      string = string.concat(`[${val}] -> `);
    });
    string = `${string}NULL`;
    return string;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(value, newValue) {
    if (!this.includes(value)) {
      return 'cannot insert';
    } else if (this.head.value === value) {
      let newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prevNode = null;
      while (current.value !== value) {
        prevNode = current;
        current = current.next;
      }
      let newNode = new Node(newValue);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
  }

  insertAfter(val, newVal) {
    if (!this.includes(val)) {
      return 'Cannot insert';
    } else {
      let current = this.head;
      let prevNode = this.head;
      while (current.value !== val) {
        prevNode = current;
        current = current.next;
      }

      let newNode = new Node(newVal);
      prevNode = current.next;
      current.next = newNode;
      newNode.next = prevNode;
    }
  }

}

const linkList = new LinkedList();



const nodeA = new Node('a');
// // const nodeB = new Node('b');
// // const nodeC = new Node('c');
// // const nodeD = new Node('d');

linkList.head = nodeA;

linkList.add(1);
linkList.add(2);
linkList.add(3);
linkList.add(4);
linkList.add(5);
linkList.add(98);
linkList.add(2314);
linkList.includes(2);
linkList.traverse();
linkList.insertBefore(4,6);
// console.log(linkList);

module.exports = LinkedList;
module.exports = Node;


