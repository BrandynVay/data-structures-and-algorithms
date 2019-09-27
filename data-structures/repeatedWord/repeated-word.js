'use strict';

const str = 'Once upon a time, there was a princess.'

const findWord = str => {
  const lowerCase = str.toLowerCase();
  const arr = lowerCase.split(' ');

  for(let i = 0; i < arr.length; i++) {
    for(let j = 2; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        return arr[j];
      }
    }
  }
}

console.log(findWord(str));
