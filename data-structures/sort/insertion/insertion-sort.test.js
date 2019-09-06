'use strict';

let insertionSort = require('./insertion-sort.js');

describe('Insertion Sort Test', () => {
  it('Can successfully sort an array', () => {
    let arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })
  it('Can successfully sort negative numbers', () => {
    let arr = [-2, 3, 1, -1, 0, 7, 4];
    insertionSort(arr);
    expect(arr).toEqual([-2, -1, 0, 1, 3, 4, 7]);
  })
  it('Can sucessfully take an empty array and test to be truthy', () => {
    let arr = [];
    insertionSort(arr);
    expect(arr).toBeTruthy();
  })
});