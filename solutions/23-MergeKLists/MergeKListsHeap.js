function mergeKLists(lists) {
  // Return null if the input array is empty
  if (lists.length === 0) {
    return null;
  }

  // Create a min heap to store the heads of the linked lists
  const heap = new MinHeap(lists.length);
  for (const list of lists) {
    if (list) {
      heap.add(list);
    }
  }

  // Create a dummy node to hold the result
  const dummy = new ListNode(null);
  let current = dummy;

  // Keep adding the smallest element from the heap to the result
  while (heap.size() > 0) {
    const node = heap.poll();
    current.next = node;
    current = current.next;
    if (node.next) {
      heap.add(node.next);
    }
  }

  // Return the head of the merged list
  return dummy.next;
}

class MinHeap {
  constructor(capacity) {
    this.heap = new Array(capacity);
    this.size = 0;
  }

  add(val) {
    this.heap[this.size] = val;
    this.size++;
    this.heapifyUp();
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    const val = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.size--;
    this.heapifyDown();
    return val;
  }

  size() {
    return this.size;
  }

  heapifyUp() {
    let i = this.size - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent].val <= this.heap[i].val) {
        break;
      }
      this.swap(parent, i);
      i = parent;
    }
  }

  heapifyDown() {
    let i = 0;
    while (i < this.size) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let minIndex = i;
      if (left < this.size && this.heap[left].val < this.heap[minIndex].val) {
        minIndex = left;
      }
      if (right < this.size && this.heap[right].val < this.heap[minIndex].val) {
        minIndex = right;
      }
      if (minIndex === i) {
        break;
      }
      this.swap(i, minIndex);
      i = minIndex;
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}
