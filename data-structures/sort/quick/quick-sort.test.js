'use strict';

let quickSort = require('./quick-sort.js');

describe('Quick Sort Test', () => {

  it('Can successfully sort an array', () => {
    let arr = [10, 1, 8, 14, 9, 22, 7, 34];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([ 1, 7, 8, 9, 10, 14, 22, 34 ]);
  });

  it('Can sucessfully sort an array of negative numbers', () => {
    let arr = [-2, -8, -1, -10, -7, -9, -3, -8, -13, -24];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([-24, -13, -10, -9, -8, -8, -7, -3, -2, -1]);
  });

  it('Can sucessfully sort an array of floats', () => {
    let arr = [0.3, 1.4, 5.6, 8.9, 3.2, 4.8, 10.9, 11.8]
    quickSort(arr, 0, arr.length -1);
    expect(arr).toEqual([0.3, 1.4, 3.2, 4.8, 5.6, 8.9, 10.9, 11.8]);
  });
});