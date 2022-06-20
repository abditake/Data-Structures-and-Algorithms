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
}

const linkedList = new LinkedList();



const nodeA = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');

linkedList.head = nodeA;

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);


linkedList.traverse();

console.log(linkedList);

module.exports = LinkedList;
module.exports = Node;
