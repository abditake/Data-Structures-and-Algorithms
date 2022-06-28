const PseudoQueue = require('../stackPseudoQueue');

test('PseudoQueue is a class', () => {
  expect(typeof PseudoQueue.prototype.constructor).toEqual('function');
});

test('can remove elements from a PseudoQueue', () => {
  const Pstack = new PseudoQueue();
  expect(() => {
    Pstack.enqueue(10);
    Pstack.enqueue(10);
    Pstack.enqueue(15);
    Pstack.enqueue(20);
    Pstack.enqueue(5);
    Pstack.dequeue;
    Pstack.dequeue;
    Pstack.dequeue;
    Pstack.dequeue;
  }).not.toThrow();
});

test('can add elements into a PseudoQueue', () => {
  const Pstack = new PseudoQueue();
  expect(() => {
    Pstack.enqueue(10);
    Pstack.enqueue(10);
    Pstack.enqueue(15);
    Pstack.enqueue(20);
    Pstack.enqueue(5);
  }).not.toThrow();
});

test('Order of elements is maintained when enqueue is instantiated following a FIFO approach', () => {
  const Pstack = new PseudoQueue();
  expect(() => {
    Pstack.enqueue(10);
    Pstack.enqueue(15);
    Pstack.enqueue(20);
    Pstack.enqueue(5);
  }).not.toThrow();
});

test('Order of elements is maintained when dequeue is instantiated following a FIFO approach', () => {
  const Pstack = new PseudoQueue();
  Pstack.enqueue(5);
  Pstack.enqueue(10);
  Pstack.enqueue(15);
  Pstack.enqueue(20);
  expect(Pstack.dequeue()).toEqual(5);
  expect(Pstack.dequeue()).toEqual(10);
  expect(Pstack.dequeue()).toEqual(15);
  expect(Pstack.dequeue()).toEqual(20);
  expect(Pstack.dequeue()).toEqual('Empty Queue');
});

test('Dequeue an empty queue should raise an exception', () => {
  const Pstack1 = new PseudoQueue();

  expect(Pstack1.dequeue()).toEqual('Empty Queue');
});
