# Table of Contents
1. [Insertion Sort](#Insertion-Sort)
  * [Code](https://github.com/KlNGU/data-structures-and-algorithms/blob/master/data-structures/sort/insertion/insertion-sort.js)
2. [Merge Sort](#Merge-Sort)
  * [Code](https://github.com/KlNGU/data-structures-and-algorithms/blob/master/data-structures/sort/merge/merge-sort.js)

---

# Insertion Sort

Insertion sort is an idea that one element from the input elements is consumed in each iteration to find its correct position. The reason this is usful is because if we are given an array of random numbers and we need to put the numbers in numeric order within the array.

It is more efficent because using an insertion sort algorithem is faster than trying to figure a way to use shift.

#### Learning Objectives
* Today You will learn how an insertion sort algorithm works and how it functions. 

#### Algorithm
The insertion sort algorithem works by taking in array as a paramater then iterating over the array. The function then looks at the first position in the array, it takes that number and sees if it is higher or lower then the next position in the array. If it is higher than it moves toward the front then gets compared again till it is in the correct position in the array.

#### Pseudocode

```javascript
InsertionSort(int[] arr)
  FOR i = 1 to arr.length
    int j <-- i - 1
    int temp <-- arr[i]
    WHILE j >= 0 AND temp < arr[j]
      arr[j + 1] <-- arr[j]
      j <-- j - 1
    arr[j + 1] <-- temp
```

**Readings and References**

* [Insertion Sort Reading](https://www.geeksforgeeks.org/insertion-sort/)

**Video**

* [Insertion Sort Video](youtube.com/watch?v=OGzPmgsI-pQ)

[back to the top](#Table-of-Contents)

---

# Merge Sort
Merge sort will divide the bigger problem into smaller problems and then solve each of the small problems in order to solve the bigger problem that we started out with.

The merge sort algorithem is one of the best options because of how fast it is.

### Learning Objectives
* Today You will learn how an merge sort algorithm works and how it functions.
* Merge Sort Diagram
  ![Merge Sort Visual](https://camo.githubusercontent.com/64ba2bcbd5c11779657e40a1d03d0ea691f6fa57/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f632f63632f4d657267652d736f72742d6578616d706c652d33303070782e676966)

### Algorithm
The Merge Sort algorithem sorts an array of numbers. The merge sort will take the array and divide it in half recursivly until you have many array of length one. It will then compare each array against another and it will push the smaller value into the sorted array.

### Pseudocode

```javascript
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

#### Readings and References
* [Merge Sort Reading](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)

#### Video
* [Merge Sort Video](youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

[back to the top](#Table-of-Contents)

---


