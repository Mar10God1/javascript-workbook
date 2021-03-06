'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr) {
  // Your code here
  var sorted;
  while (!sorted) {
  sorted = true;
  for (var i = 0; i < arr.length -1; i++) {
    if (arr[i] > arr[i +1]) {
       sorted = false;
       var temp;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
     }
   }
   return arr;
 }
}

function mergeSort (arr) {
  // Your code here
   var len = arr.length;
   if(len < 2)
    return arr;
  var mid = Math.floor(len/2),
    left = arr.slice(0,mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
  }
  function merge (left, right) {
    var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen) {
     if(left[l] < right[r]) {
       result.push(left[l++]);
     } else {
       result.push(right[r++]);
     }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
  }

function binarySearch (arr, item) {
  // Your code here
  var firstIndex = 0,
  lastIndex = arr.length - 1,
  middleIndex = Math.floor((lastIndex + firstIndex)/2);

  while(arr[middleIndex] !== item && firstIndex < lastIndex) {
    if (item < arr[middleIndex]) {
        lastIndex = middleIndex - 1;
    } else if (item > arr[middleIndex]) {
        firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((lastIndex + firstIndex)/2);
  }
  return (arr[middleIndex] !== item) ? false : middleIndex;
}

// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
