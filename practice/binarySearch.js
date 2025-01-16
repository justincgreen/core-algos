const numArr = [...Array(10000).keys()];

class Solution {
  binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      console.log(`Searching: ${mid}`); // visual

      if(arr[mid] === target) return mid; // target found return index of target
      else if(arr[mid] < target) {
        left = mid + 1;
      }else {
        right = mid - 1;
      }
    }
    return false;
  }
}

const test = new Solution();
console.log(test.binarySearch(numArr, 500));