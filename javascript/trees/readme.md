# Trees
- A tree is also a node-based data structure, but within
a tree, each node can have links to multiple nodes
  - a node with two children must have one child with a value less than the parent and greater than the parent.

## Challenge
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
-   Create a Binary Search Tree class
    -   This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
    -   Add
        -   Arguments: value
        -   Return: nothing
        -   Adds a new node with that value in the correct location in the binary search tree.
    -   Contains
        -   Argument: value
        -   Returns: boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
- Big O:  find number in BST

- time:  O(log(n))  <- this is the opposite of n squared

- space: O(1) - not creating anything.  just looking.  

if  we were creating something?  O(h) where h = height 

## API
- Can successfully instantiate an empty tree
- Can successfully instantiate a tree with a single root node
- For a Binary Search Tree, can successfully add a left child and right child properly to a node
- Can successfully return a collection from a preorder traversal
- Can successfully return a collection from an inorder traversal
- Can successfully return a collection from a postorder traversal
- Returns true	false for the contains method, given an existing or non-existing node value