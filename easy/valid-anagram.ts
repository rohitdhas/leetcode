// Problem - Valid Anagram (Eazy) ✅
// Link - https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
  const sMap = {};
  const tMap = {};

  if (s.length !== t.length) return false;

  for (let x = 0; x < s.length; x++) {
    sMap[s[x]] = (sMap[s[x]] || 0) + 1;
    tMap[t[x]] = (tMap[t[x]] || 0) + 1;
  }

  for (let x = 0; x < s.length; x++) {
    if (sMap[s[x]] !== tMap[s[x]]) return false;
  }

  return true;
}
