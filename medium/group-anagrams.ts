// Problem - Group Anagrams (Medium) ✅
// Link - https://leetcode.com/problems/group-anagrams/description/

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (let str of strs) {
        const charFreq = new Array(26).fill(0);
        for (let x=0; x<str.length; x++) {
            charFreq[str.charCodeAt(x) - 97]++;
        }

        const strKey = charFreq.toString();
        if (!map.has(strKey)) map.set(strKey, []);
        map.get(strKey)?.push(str);
    }
    
    return Array.from(map.values());
};