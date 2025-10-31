/**
 * Definition for singly-linked list.
 */
export class ListNode {
  /**
   * Creates a new ListNode.
   * @param {number} value - The value of the node
   * @param {ListNode|null} next - The reference to the next node (default is null)
   */
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Groups all nodes with odd indices together followed by even indices.
 * @param {ListNode} head - The head of the linked list
 * @returns {ListNode} - The reordered linked list
 */
export function oddEvenLinkedList(head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  // Link the end of odd list to the start of even list
  odd.next = evenHead;

  return head;
}

/**
 * Helper function to print the linked list (for testing purposes).
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

// Tiny self-check in browser/console environment
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

    const reordered = oddEvenLinkedList(head);
    console.log("Reordered (odd-even) list:");
    printList(reordered);
    console.log("---");
  })();
