// Two-pointer technique
var removeDuplicates = function(nums) {
  if(nums.length === 1) return 1;

  let i = 0; // slow pointer
  for(let j = 1; j < nums.length; j++) {
      if(nums[i] !== nums[j]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1; // returns the number of unique elements in the nums array
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5 unique elements in nums array
console.log(removeDuplicates([0,0,1,1,])); // 2 unique elements in nums array