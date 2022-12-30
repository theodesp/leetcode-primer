/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapAdjacentNodes(head) {
  // Edge case: if the list has 0 or 1 nodes, there is nothing to swap
  if (head === null) return null;

  // Initialize variables for the prev, current and next nodes
  let prev = null,
    p1 = head,
    p2 = p1.next;

  // Iterate through the list, swapping the current and next nodes
  while (p2) {
    if (prev === null) {
      head = p2;
    } else {
      prev.next = p2;
    }
    // Pairwise swap
    p1.next = p2.next;
    p2.next = p1;

    // Advance prev current and next nodes
    prev = p1;
    p1 = p1.next;
    p2 = p1 === null ? null : p1.next;
  }

  // Return the head of the modified list
  return head;
}
