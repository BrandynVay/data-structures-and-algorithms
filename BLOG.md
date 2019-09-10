## Insertion Sort

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
