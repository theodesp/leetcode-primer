/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeSortedLists(list1, list2) {
  // Create a dummy node to hold the result
  const dummy = new ListNode(null);
  let current = dummy;

  // Compare the nodes of the two lists and add the smaller one to the result
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Add the remaining nodes from list1 or list2
  current.next = list1 || list2;

  // Return the head of the merged list
  return dummy.next;
}
