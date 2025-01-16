class Solution {
  linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        return [true, i]; // return true and indice of the target inside an array
      }
    }
    return false;
  }
}

const test = new Solution();
console.log(test.linearSearch([9,8,3,7,9,5], 7));