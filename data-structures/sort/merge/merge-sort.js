'use strict';


// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length
// 
//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)
// 
// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0
// 
//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
// 
//         k <-- k + 1
// 
//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left



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






