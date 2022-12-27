// Problem - Leaf-Similar Trees (Eazy) ✅
// Link - https://leetcode.com/problems/leaf-similar-trees/description/

// Complexity Analysis
// Time Complexity: O(T1 + T2), where T1,T2 are the lengths of the given trees.
// Space Complexity: O(T1 + T2), the space used in storing the leaf values.

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const first: number[] = [];
  const second: number[] = [];

  getLeaves(root1, first);
  getLeaves(root2, second);

  if (first.length !== second.length) return false;
  for (let x = 0; x < first.length; x++) {
    if (first[x] !== second[x]) return false;
  }

  return true;
}

function getLeaves(node: TreeNode | null, arr: number[]) {
  if (node === null) return;
  if (node.left === null && node.right === null) {
    arr.push(node.val);
  }

  getLeaves(node.left, arr);
  getLeaves(node.right, arr);
}
