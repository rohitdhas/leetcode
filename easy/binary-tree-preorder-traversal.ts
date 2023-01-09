// Problem - Binary Tree Preorder Traversal (Eazy) ✅
// Link - https://leetcode.com/problems/binary-tree-preorder-traversal

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const arr: number[] = [];
  preorder(root, arr);
  return arr;
}

function preorder(root: TreeNode | null, arr: number[]) {
  if (root) {
    arr.push(root.val);
    preorder(root.left, arr);
    preorder(root.right, arr);
  }
}
