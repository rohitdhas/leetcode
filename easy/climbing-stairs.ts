// Problem - Climbing Stairs (Eazy) ✅
// Link - https://leetcode.com/problems/climbing-stairs

function climbStairs(n: number): number {
  let one = 1,
    two = 1;

  for (let x = 0; x < n - 1; x++) {
    const temp = one;
    one += two;
    two = temp;
  }

  return one;
}
