// Problem - Delete Node in a Linked List (Medium) ✅
// Link - https://leetcode.com/problems/reverse-integer/description/

function reverse(x: number): number {
  let reverse = 0;
  const sign = x < 0;
  x = Math.abs(x);

  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverse > 0x7fffffff ? 0 : sign ? -reverse : reverse;
}
