class Solution {
  linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        return arr[i];
      }      
    }
    return "Target Not Found";
  }
}

const test = new Solution();
console.log(test.linearSearch([1,2,3,4,5,6,7,8], 7));