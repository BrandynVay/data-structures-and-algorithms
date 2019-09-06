'use strict';

// Pseudo Code
//  InsertionSort(int[] arr)
//    FOR i = 1 to arr.length
//      int j <-- i - 1
//      int temp <-- arr[i]
//      WHILE j >= 0 AND temp < arr[j]
//        arr[j + 1] <-- arr[j]
//        j <-- j - 1
//      arr[j + 1] <-- temp

let arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp
  }
  return arr;
}

console.log(insertionSort(arr)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

module.exports = insertionSort;
