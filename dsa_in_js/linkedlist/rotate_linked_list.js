/**
 * Definition for singly-linked list.
 */
export class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Rotates the linked list to the right by k places.
 * @param {ListNode} head - The head of the linked list
 * @param {number} k - Number of rotations
 * @returns {ListNode} - The rotated linked list
 */
export function rotateRight(head, k) {
  if (!head || k === 0) return head;

  // Step 1: Find the length and tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Make it circular
  tail.next = head;

  // Step 3: Find new tail position
  const rotations = k % length;
  const stepsToNewTail = length - rotations;
  let newTail = head;
  for (let i = 1; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  // Step 4: Break the loop to form new head
  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}

/**
 * Helper function to print the linked list.
 * @param {ListNode} head - The head of the linked list
 */
export function printList(head) {
  const values = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// Self-test for browser/console
if (typeof window !== "undefined")
  (function selfTest() {
    const head = new ListNode(1,
      new ListNode(2,
        new ListNode(3,
          new ListNode(4,
            new ListNode(5)
          )
        )
      )
    );

    console.log("Original list:");
    printList(head);
    console.log("---");

    const rotated = rotateRight(head, 2);
    console.log("Rotated list by 2:");
    printList(rotated);
    console.log("---");
  })();
