function reverseKGroup(head, k) {
  // Initialize variables for the dummy return list and the lastNode node
  let dummy = new ListNode();
  dummy.next = head;
  let lastNode = dummy;

  // Iterate through the list, reversing the current sublist
  while (head != null) {
    let counter = 0;
    let nextIter = head;
    // Find the end of the current sublist
    while (counter < k && nextIter != null) {
      // get nextIter
      nextIter = nextIter.next;
      ++counter;
    }

    if (counter < k) {
      // If the sublist is not long enough, stop reversing
      lastNode.next = head;
      break;
    }

    counter = 0;
    lastNode.next = null;
    let prev = lastNode;
    let next = lastNode.next;
    let curr = head;

    // Reverse the current sublist
    while (counter < k) {
      prev.next = curr;
      curr = curr.next;
      prev.next.next = next;
      next = prev.next;
      if (counter == 0) {
        lastNode = next;
      }
      ++counter;
    }

    head = nextIter;
  }

  // Return the next pointer of the modified list
  return dummy.next;
}
