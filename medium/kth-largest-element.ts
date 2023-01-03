// Problem - Kth Largest Element in an Array (Medium) ✅
// Link - https://leetcode.com/problems/kth-largest-element-in-an-array/description/

function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
}
