# Challenge Summary
-   reate a class called AnimalShelter which holds only dogs and cats.
-   The shelter operates using a *first-in, first-out* approach.
-   Implement the following methods:
    -   enqueue
        -   Arguments: animal
            -   `animal` can be either a dog or a cat object.
    -   dequeue
        -   Arguments: pref
            -   `pref` can be either `"dog"` or `"cat"`
        -   Return: either a dog or a cat, based on preference.
            -   If `pref` is not `"dog"` or `"cat"` then return null.
## Approach & Efficiency
Created two classes dog and cat
make sure they had a type in those class using extends
then I thought of just letting the type be recognized through preference then dequeue 
the correct type inputed

## Solution
Create a dog class and name it whatever for the value 
then enqueue that to the dog stack 
create a cat class and name it whatever for the value 
then enque that to the dog stack
then just dequeue from cat and dog then log the value
that is dequeued to confirm you are dequeue the correct type.
