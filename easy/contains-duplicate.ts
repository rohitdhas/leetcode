// Problem - Contains Duplicate (Eazy) ✅
// Link - https://leetcode.com/problems/contains-duplicate

function containsDuplicate(nums: number[]): boolean {
  const obj = {};

  for (let x = 0; x < nums.length; x++) {
    if (obj[nums[x]]) {
      return true;
    } else {
      obj[nums[x]] = 1;
    }
  }

  return false;
}
