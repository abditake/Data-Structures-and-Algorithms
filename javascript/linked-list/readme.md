# Singly Linked List
A linked list is a data structure where the objects are arranged 
in a linear order. Unlike an array, however, in which the linear 
order is determined by the array indices, the order in a linked 
list is determined by a pointer in each object.  

## Challenge
Write a function called zip lists
  Arguments: 2 linked lists
    Return: New Linked List, zipped as noted below
        Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
        Try and keep additional space down to O(1)
        You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Solution
Creating a 3 linked lists.
  - one is the zippered link list the other two are link list A and B then set the values of the zipper linked list 
    to the head and next values of linked A follwing that make the values that come after linked list A the head and
    next values of linked list B. This will in turn create that Zipper.layering the two linked list on each other.

Visualization

![Zipper](https://assets.leetcode.com/uploads/2021/03/05/160_statement.png)
