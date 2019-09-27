'use strict';

let result = [];

function treeIntersection(one, two) {
  let map = Map;
  let oneTree = inOrderTraversal(one);

  map.set(oneTree);
  let twoTree = inOrderTraversal(two);

  if(twoTree === map.search(twoTree)) {
    return result + twoTree;
  }
}
