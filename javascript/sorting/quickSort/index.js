'use strict';

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

// let sortArr = quickSort(arr, 0, arr.length-1);
// console.log(sortArr);

module.exports = { quickSort };












// function quickSort(arr) {

//   let lo = arr[0];
//   let hi = arr.length;



// };





let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

quickSort(array);
