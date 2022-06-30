'use strict';


const { AnimalShelter, Cat, Dog } = require('./stack-queue-animal-shelter');


describe('Animal Shelter Queue Tests', () => {
  test('Check if Queues are setup', () => {
    const animalQueue = new AnimalShelter();
    console.log(animalQueue.cat.front);
    expect(animalQueue.cat.front).toEqual(null);
    expect(animalQueue.cat.back).toEqual(null);
    expect(animalQueue.dog.front).toEqual(null);
    expect(animalQueue.dog.back).toEqual(null);
  });
  test('can add cats or dogs to a queue', () => {
    const animalQueue = new AnimalShelter();
    let dog1 = new Dog('goodBoy');
    let cat1 = new Cat('goodCat');
    animalQueue.enqueue(dog1);
    animalQueue.enqueue(cat1);
    expect(animalQueue.cat).not.toEqual(null);
    expect(animalQueue.dog).not.toEqual(null);
  });
  test('can remove cats or dogs to a queue', () => {
    const animalQueue = new AnimalShelter();
    let dog1 = new Dog('goodBoy');
    let cat1 = new Cat('goodCat');
    animalQueue.enqueue(dog1);
    animalQueue.enqueue(cat1);
    animalQueue.dequeue(dog1);
    animalQueue.dequeue(cat1);
    expect(animalQueue.cat)
  });

  test('should error if animal to enqueue is not of type Dog or Cat and log a message of `Sorry, we cant take them`', () => {
    const q = new AnimalShelter();
    expect(() => {
      q.enqueue({ type: 'Goat' });
    }).not.toThrow();
  });
});
