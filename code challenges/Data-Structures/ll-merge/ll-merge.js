'use strict';

// Paired Programed with Brad Smialek
const ll = require('../linked-list/linked-list.js');

function mergeLists(l1, l2){
  if(typeof l1 !== 'object'){
    throw new TypeError('value must be an object');
  }

  let curr1 = l1.head;
  let curr2 = l2.head;
  let zipList = new LinkedList();

  while(curr1 || curr2){
    if(curr1){
      zipList.append(curr1.value);
      curr1 = curr1.next;
    }

    if(curr2){
      zipList.append(curr2.value);
      curr2 = curr2.next;
    }
  }
  return zipList.head;
}
