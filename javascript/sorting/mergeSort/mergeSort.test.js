'use strict';

const { mergeSort } = require('./index');


describe('Testing mergeSort', () => {
  test('should take in an array and sort', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let newArray = [4, 8, 15, 16, 23, 42];
    expect(newArray).toEqual(mergeSort(arr));
  });

  test('should return the original array if array length is equal to or less than 1', () => {
    let arr = [1];
    expect(arr).toEqual(mergeSort(arr));
  });
});
