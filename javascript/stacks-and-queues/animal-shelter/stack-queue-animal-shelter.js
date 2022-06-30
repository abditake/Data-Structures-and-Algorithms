const { Queue } = require('../stacks-and-queues');


class Animal {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class Dog extends Animal{
  constructor(name){
    super(name);
    this.type = 'Dog';
  }
}


class Cat extends Animal{
  constructor(name){
    super(name);
    this.type = 'Cat';
  }
}

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'Dog') {
      this.dog.enqueue(animal);
      return this.dog;
    } else if (animal.type === 'Cat') {
      this.cat.enqueue(animal);
      return this.cat;
    } else {
      console.error('Sorry, we cant take them');
    }
  }

  dequeue(preference) {
    if (preference === 'Dog') {
      this.dog.dequeue();
      return this.dog;
    } else if (preference === 'Cat') {
      this.cat.dequeue();
    } else if (!preference === 'Cat') {
      return null;
    } else if (!preference === 'Dog') {
      return null;
    }
  }
}


let q = new AnimalShelter();

let dog1 = new Dog('goodBoy');


q.enqueue(dog1);
q.dequeue('Dog');

console.log(q);


module.exports = {
  AnimalShelter,
  Cat,
  Dog,
};
