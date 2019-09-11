'use strict';

let arr = [10, 1, 8, 14, 9, 22, 7, 34];

const quickSort = (arr, left, right) => {
  if(left < right) {
    let pivot = partition(arr, left, right);

    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  } 
}

const partition = (arr, left, right) => { 
  let pivot = right;
  let i = left - 1;
  let j = left;

  while (j < pivot) {

    if (arr[j] > arr[pivot]) {
      j++;
    }

    else {
      i++;
      swap(arr, j, i);
      j++;
    }
  }
  swap(arr, i + 1, pivot);

  return i + 1;
}

const swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);

module.exports = quickSort;

