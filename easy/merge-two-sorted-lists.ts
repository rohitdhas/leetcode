// Problem - Merge Two Sorted Lists (Eazy) ✅
// Link - https://leetcode.com/problems/merge-two-sorted-lists

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const nums: number[] = [];

  while (list1 !== null) {
    nums.push(list1.val);
    list1 = list1.next;
  }

  while (list2 !== null) {
    nums.push(list2.val);
    list2 = list2.next;
  }

  if (!nums.length) return null;

  nums.sort((a: number, b: number) => a - b);
  const head = new ListNode(nums[0]);
  let headCpy = head;

  for (let x = 1; x < nums.length; x++) {
    headCpy.next = new ListNode(nums[x]);
    headCpy = headCpy.next;
  }

  return head;
}
