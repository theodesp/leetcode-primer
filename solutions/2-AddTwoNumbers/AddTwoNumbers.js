/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1, l2) {
  // We need this node to return the pointer to the first element of the list
  const res = new ListNode();
  let carry = 0;
  let curr = res;
  // While we have elements in both lists
  while (l1 || l2) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }
    // next_digit=a+b%10
    curr.next = new ListNode(carry % 10);
    curr = curr.next;
    // carry=a+b//10
    carry = Math.floor(carry / 10);
  }

  // Check one last time the carry bit
  if (carry > 0) {
    curr.next = new ListNode(carry);
    curr = curr.next;
  }

  return res.next;
}
