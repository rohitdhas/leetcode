// Problem - Group Anagrams (Medium) ✅
// Link - https://leetcode.com/problems/group-anagrams/description/

function groupAnagrams(strs: string[]): string[][] {
    const map = {};
    for (let str of strs) {
        const sorted = str.split('').sort().join('');
        if (map[sorted]) {
            map[sorted].push(str);
        } else {
            map[sorted] = [str];
        }
    }
    
    return Object.values(map);
};
