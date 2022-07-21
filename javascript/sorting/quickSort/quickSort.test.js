'use strict';

const { quickSort } = require('./index');

describe('Testing quickSort', () => {
  test('should put an unordered array in order', () => {

    let array = [8,4,23,42,16,15];
    let sortedArray = quickSort(array, 0, array.length - 1);
    console.log(sortedArray);

    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
