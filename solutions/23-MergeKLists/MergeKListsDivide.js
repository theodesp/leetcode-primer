function mergeKLists(lists) {
  // Return null if the input array is empty
  if (lists.length === 0) {
    return null;
  }

  // Merge the linked lists using a divide and conquer approach
  return mergeKListsRecursive(lists, 0, lists.length - 1);
}

function mergeKListsRecursive(lists, start, end) {
  // Base case: if there is only one linked list, return it
  if (start === end) {
    return lists[start];
  }

  // Divide the linked lists into two halves and merge them recursively
  const mid = Math.floor((start + end) / 2);
  const left = mergeKListsRecursive(lists, start, mid);
  const right = mergeKListsRecursive(lists, mid + 1, end);

  // Merge the two halves and return the result
  return mergeTwoLists(left, right);
}

function mergeTwoLists(list1, list2) {
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
