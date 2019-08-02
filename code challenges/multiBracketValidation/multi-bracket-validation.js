'use strict';

function multiBracketValidation(input) {
  if (input.length <= 1){ return false; }
  let stack = [];

  let matchingBrackets, char;

  let openingBrackets = ['[', '{', '('];
  let closingBrackets = [']', '}', ')'];

  for (let i = 0; i < input.length; i++) {
    char = input[i];

    if(closingBrackets.indexOf(char) > -1) {
      matchingBrackets = openingBrackets[closingBrackets.indexOf(char)];
    
      if (stack.length == 0 || (stack.pop() != matchingBrackets)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return (stack.length == 0);
};

console.log(multiBracketValidation('([)]'));  //false
console.log(multiBracketValidation('()')); //true
console.log(multiBracketValidation('{}[]()')); //true
console.log(multiBracketValidation('{[}]')); //false
console.log(multiBracketValidation('{[}]')); //false
console.log(multiBracketValidation('([)]'));//false
console.log(multiBracketValidation('{}{}[][][{{{{{}}}}}]')); //trues
console.log(multiBracketValidation('{}[]()')); //true
