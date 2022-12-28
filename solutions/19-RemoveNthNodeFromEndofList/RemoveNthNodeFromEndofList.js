function removeNthFromEnd(head, n) {
  // Edge case: if the linked list is empty or has only one node
  if (!head || !head.next) {
    return null;
  }

  // Set up two pointers: slow and fast
  let slow = head;
  let fast = head;

  // Move the fast pointer n steps ahead of the slow pointer
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // If the fast pointer reaches the end of the linked list,
  // it means we need to remove the head of the list
  if (!fast) {
    return head.next;
  }

  // Move the slow and fast pointers together until the fast pointer
  // reaches the end of the linked list
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the nth node from the end by updating the next pointer
  // of the (n-1)th node
  slow.next = slow.next.next;

  // Return the head of the linked list
  return head;
}
