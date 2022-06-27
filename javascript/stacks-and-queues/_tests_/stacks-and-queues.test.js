
const { Queue, Stack } = require('../stacks-and-queues.js');


describe('Testing Stacks', () => {
  test('Stack is a class', () => {
    expect(typeof Stack.prototype.constructor).toEqual('function');
  });

  test('stack can add and remove items', () => {
    const stack = new Stack();

    stack.push(1);

    expect(stack.pop()).toEqual(1);

    stack.push(2);

    expect(stack.pop()).toEqual(2);
  });

  test('stack can follow first in, last out', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

  test('peek returns the first element but does not pop', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.peek()).toEqual(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.peek()).toEqual(1);
    expect(stack.pop()).toEqual(1);
  });

});

describe('Testing Queues', () => {
  test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const q = new Queue();

    expect(() => {
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
    }).not.toThrow();
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const q = new Queue();

    expect(() => {
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      q.dequeue(2);
    }).not.toThrow();
  });

  test('Order of elements is maintained', () => {
    const q = new Queue();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(() => { q.dequeue(); }).toThrow();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    const q = new Queue();

    expect(() => { q.dequeue(); }).toThrow();
    expect(() => { q.peek(); }).toThrow();
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);

    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(4);
  });
});





