/*
 * Problem: Merge K Sorted Linked Lists
 * 
 * Description:
 * Given an array of k linked-lists, where each linked-list is sorted in ascending order,
 * merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Approach:
 * Use a Min-Heap (PriorityQueue) to efficiently get the smallest element among the list heads.
 * Continuously extract the smallest node and attach it to the result list.
 * 
 * Time Complexity: O(N log K)
 * N = total number of nodes across all lists
 * K = number of linked lists
 * 
 * Space Complexity: O(K)
 * For the heap storing one node from each list.
 * 
 * Example:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * merging them into one sorted linked list:
 * 1->1->2->3->4->4->5->6
 * 
 * Leetcode Link: https://leetcode.com/problems/merge-k-sorted-lists/description/
 */

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a, b) -> a.val - b.val);
      
        // Add the head of each non-empty linked list to the heap
        for (ListNode head : lists) {
            if (head != null) {
                minHeap.offer(head);
            }
        }
      
        // Create a dummy node to simplify list construction
        ListNode dummyHead = new ListNode();
        ListNode current = dummyHead;
      
        // Process nodes until the heap is empty
        while (!minHeap.isEmpty()) {
            // Extract the node with the smallest value
            ListNode smallestNode = minHeap.poll();
          
            // If this node has a next node, add it to the heap
            // This ensures we continue processing the list this node came from
            if (smallestNode.next != null) {
                minHeap.offer(smallestNode.next);
            }
          
            // Append the smallest node to our result list
            current.next = smallestNode;
            current = current.next;
        }
      
        // Return the merged list, skipping the dummy head
        return dummyHead.next;
    }
}