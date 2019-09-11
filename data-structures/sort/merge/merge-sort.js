'use strict';

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  let result = [];
  let idxLeft = 0;
  let idxRight = 0;

  while (idxLeft < left.length && idxRight < right.length) {
    if (left[idxLeft] < right[idxRight]) {
      result.push(left[idxLeft]);
      idxLeft++;
    } else {
      result.push(right[idxRight]);
      idxRight++;
    }
  }

  return result.concat(left.slice(idxLeft)).concat(right.slice(idxRight));
}

const arr = [2, 8, 1, 10, 7, 9, 3, 8, 13, 24];
const arr1 = [-2, -8, -1, -10, -7, -9, -3, -8, -13, -24]
console.log(mergeSort(arr)); // [ 1, 2, 3, 7, 8, 8, 9, 10, 13, 24 ]
console.log(mergeSort(arr1));

module.exports = mergeSort;






