// Problem - Two Sum (Eazy) ✅
// Link - https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] | undefined {
  const map = {};

  for (let x = 0; x < nums.length; x++) {
    const numToFind = target - nums[x];
    if (map[numToFind] !== undefined) {
      return [map[numToFind], x];
    }

    map[nums[x]] = x;
  }
}
