'use strict';

let mergeSort = require('./merge-sort.js');

describe('Merge Sort Test', () => {

  it('Return array if there is only 1 number', () => {
    let arr = [1];
    arr = mergeSort(arr);
    expect(arr).toEqual([1]);
  });

  it('Can successfully sort an array', () => {
    let arr = [2, 8, 1, 10, 7, 9, 3, 8, 13, 24];
    arr = mergeSort(arr);
    expect(arr).toEqual([ 1, 2, 3, 7, 8, 8, 9, 10, 13, 24 ]);
  });

  it('should sort negative numbers', () => {
    let arr = [-2, -8, -1, -10, -7, -9, -3, -8, -13, -24];
    arr = mergeSort(arr);
    expect(arr).toEqual([-24, -13, -10, -9, -8, -8, -7, -3, -2, -1]);
  });

});