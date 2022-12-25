// Problem - Valid Parentheses (Eazy) ✅
// Link - https://leetcode.com/problems/valid-parentheses/description/

function isValid(s: string): boolean {
  const validations = { ")": "(", "}": "{", "]": "[" };
  const stack: string[] = [];

  for (let x = 0; x < s.length; x++) {
    const char = s[x];

    if (validations[char]) {
      const last = stack.pop();
      if (last !== validations[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
