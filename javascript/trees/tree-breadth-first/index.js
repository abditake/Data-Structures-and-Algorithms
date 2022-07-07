'use strict';

let { Queue } = require('../../stacks-and-queues/stacks-and-queues')


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


    breadthFirst(tree) {
        let arr = [];
        let queue = new Queue();
        let current = tree.root;
        queue.enqueue(current);

        while (queue > 0) {
            let front = queue.dequeue(current);
            arr.push(front.value);
            if (current.left) queue.enqueue(current.left);
            if (current.right) queue.enqueue(current.right);
        }
        return arr;
    }
}



let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);





console.log(queue);






