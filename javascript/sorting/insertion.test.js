'use strict';

let insertionSort = require('./index');

describe('Test insertion sample array', () => {
  //cc 26
  test('Can it even sort an array', () => {
    let q = [8,4,23,42,16,15];
    let sorted = insertionSort(q);

    expect(sorted).toEqual([4,8,15,16,23,42]);

  });

  test('Reverse-sorted', () => {
    let q = [34, 345, 1, 2, 3, -54];
    let sorted = insertionSort(q);

    expect(sorted).toEqual([-54,1,2,3,34,345]);

  });

  test('Few uniques', () => {
    let q = [5,12,7,5,5,7];
    let sorted = insertionSort(q);

    expect(sorted).toEqual([5,5,5,7,7,12]);

  });

  test('Nearly-sorted', () => {
    let q = [2,3,5,7,13,11];
    let sorted = insertionSort(q);

    expect(sorted).toEqual([2,3,5,7, 11, 13]);

  });
});
