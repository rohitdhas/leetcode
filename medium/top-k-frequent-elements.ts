// Link to problem - https://leetcode.com/problems/top-k-frequent-elements/description/

function topKFrequent(nums: number[], k: number): number[] {
  const freq: { [key: number]: number } = {};

  for (let num of nums) {
      freq[num] = (freq[num] || 0) + 1;
  }

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(arr => Number(arr[0]));
};
