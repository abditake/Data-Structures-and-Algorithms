'use strict';


const AnimalShelter = require('./stack-queue-animal-shelter');


describe('Animal Shelter Queue Tests', () => {
  test('Check if Queues are setup', () => {
    const aQueue = new AnimalShelter();
    expect(aQueue.dog.front).toEqual(null);
    expect(aQueue.dog.back).toEqual(null);
    expect(aQueue.cat.front).toEqual(null);
    expect(aQueue.cat.back).toEqual(null);
  });
  test('can add cats or dogs to a queue', () => {
    const aQueue = new AnimalShelter();

  });
  test('can remove cats or dogs to a queue', () => {
    const aQueue = new AnimalShelter();
    
  });

  test('should error if animal to enqueue is not of type Dog or Cat and log a message of `Sorry, we cant take them`', () => {
    const q = new AnimalShelter();
    expect(() => {
      q.enqueue({ type: 'Goat' });
    }).not.toThrow();
  });
});
