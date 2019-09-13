# Table of Contents
1. [Insertion Sort](#Insertion-Sort)
  * [Code](https://github.com/KlNGU/data-structures-and-algorithms/blob/master/data-structures/sort/insertion/insertion-sort.js)
2. [Merge Sort](#Merge-Sort)
  * [Code](https://github.com/KlNGU/data-structures-and-algorithms/blob/master/data-structures/sort/merge/merge-sort.js)
3. [Quick Sort](#Quick-Sort)
  * [Code](https://github.com/KlNGU/data-structures-and-algorithms/blob/master/data-structures/sort/quick/quick-sort.js)

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

![Merge Visual](http://cdn.differencebetween.net/wp-content/uploads/2018/11/Difference-between-Quick-Sort-and-Merge-Sort-.png)

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

# Quick Sort
Quicksort algorithm works by picking an element from the array and denoting it as the pivot. All other elements in the array are split into two categories, then they are either less than or greater than the pivot element.

### Learning Objectives
* Today You will learn how an quick sort algorithm works and how it functions.
  * ![img](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-29/Quicksort_diagram.png)

### Algorithm
Each of the two arrays is then put through that very same algorithm. A pivot is chosen and all other values are separated into two arrays of less-than and greater-than values. The sub-array will contain a single value or no value at all, as there will be no more values with which to compare it. The rest of the values were all denoted to be pivots at some previous point and did not trickle down to this lowest sub-array.

### Pseudocode

```javascript
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

#### Readings and References
* [Quick Sort Reading](https://guide.freecodecamp.org/algorithms/sorting-algorithms/quick-sort/)

#### Video
* [Quicksort Video](https://www.youtube.com/watch?v=MZaf_9IZCrc)

[back to the top](#Table-of-Contents)
