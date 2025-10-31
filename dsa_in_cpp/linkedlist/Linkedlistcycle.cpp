/*
    Problem:
        Given the head of a linked list, determine if the list contains a cycle.
        If a cycle exists, return the node where the cycle begins.
        If no cycle exists, return nullptr.

        A cycle occurs when a node's `next` pointer points back to a previous node,
        forming a loop.

    Approach:
        - Use Floyd’s Cycle Detection Algorithm (Tortoise and Hare method):
            * Use two pointers — slow and fast.
            * Move slow by one step and fast by two steps.
            * If they ever meet, a cycle exists.
        - To find the **starting node** of the cycle:
            * Move one pointer to the head.
            * Move both one step at a time — the node where they meet is the cycle start.

    Time Complexity:
        - O(n): each node is visited at most twice.
    Space Complexity:
        - O(1): only uses two pointers, no extra memory.

    Example:
        Input: head = [3,2,0,-4], pos = 1  (tail connects to node at index 1)
        Output: Node with value 2 (start of the cycle)
*/

#include <bits/stdc++.h>
using namespace std;

// Definition for singly-linked list
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

// ---------------------------
// Solution Class
// ---------------------------
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if (head == nullptr) return nullptr;

        ListNode *slow = head;
        ListNode *fast = head;
       
        // Phase 1: Detect if a cycle exists
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;         // move 1 step
            fast = fast->next->next;   // move 2 steps

            if (slow == fast) { // cycle detected // ---------------------------
                // Phase 2: Find the start of the cycle
               
                slow = head;
                while (slow != fast) {
                    slow = slow->next;
                    fast = fast->next;
                }
                return slow; // starting node of cycle
            }
        }

        return nullptr; // no cycle found
    }
};


// Helper to create linked list

ListNode* createList(vector<int> vals) {
    if (vals.empty()) return nullptr;
    ListNode* head = new ListNode(vals[0]);
    ListNode* curr = head;
    for (int i = 1; i < vals.size(); i++) {
        curr->next = new ListNode(vals[i]);
        curr = curr->next;
    }
    return head;
}


// Helper to create a cycle in the list
// pos = index where tail connects

void createCycle(ListNode* head, int pos) {
    if (pos == -1) return; // no cycle
    ListNode* tail = head;
    ListNode* cycleNode = nullptr;
    int index = 0;

    while (tail->next != nullptr) {
        if (index == pos) cycleNode = tail;
        tail = tail->next;
        index++;
    }

    if (cycleNode != nullptr)
        tail->next = cycleNode; // create cycle
}


// Main function to test the logic

int main() {
    vector<int> vals = {3, 2, 0, -4};
    int pos = 1; // position to form cycle (connect last node to node at index 1)

    ListNode* head = createList(vals);
    createCycle(head, pos);

    Solution sol;
    ListNode* cycleNode = sol.detectCycle(head);

    if (cycleNode != nullptr)
        cout << "Cycle detected at node with value: " << cycleNode->val << endl;
    else
        cout << "No cycle detected." << endl;

    return 0;
}


