// Problem - Delete Node in a Linked List (Medium) ✅
// Link - https://leetcode.com/problems/delete-node-in-a-linked-list/description/

function deleteNode(node: ListNode | null): void {
  node.val = node.next.val;
  node.next = node.next.next;
}
