class Solution {
  binarySearch(arr, target) {
    let left = 0; // represents start of array
    let right = arr.length - 1; // reps end of array

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if(arr[mid] === target) return mid; // target found return index
      else if(arr[mid] < target) {
        left = mid + 1; // move to the right half
      }else {
        right = mid - 1; // move to the left half
      }
    }
    return false; // target not found
  }
}

const test = new Solution();
console.log(test.binarySearch([1,2,3,4,5,8,9], 8));