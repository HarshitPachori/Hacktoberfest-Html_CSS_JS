// File: LinearSearch.java
// Description: Implementation of Linear Search (Iterative & Recursive) in Java
// ---------------------------------------------------------------------------

public class LinearSearch {

    /**
     * Performs linear search iteratively.
     *
     * @param arr The array to search
     * @param target The value to find
     * @return The index of target if found, otherwise -1
     */
    public static int linearSearchIterative(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target)
                return i;
        }
        return -1;
    }

    /**
     * Performs linear search recursively.
     *
     * @param arr The array to search
     * @param target The value to find
     * @param index The current index
     * @return The index of target if found, otherwise -1
     */
    public static int linearSearchRecursive(int[] arr, int target, int index) {
        if (index >= arr.length)
            return -1;
        if (arr[index] == target)
            return index;
        return linearSearchRecursive(arr, target, index + 1);
    }

    // Main method for testing
    public static void main(String[] args) {
        int[] numbers = {10, 23, 45, 70, 11, 15};
        int target = 70;

        System.out.println("Array: [10, 23, 45, 70, 11, 15]");
        System.out.println("Searching for: " + target);

        int iterativeResult = linearSearchIterative(numbers, target);
        int recursiveResult = linearSearchRecursive(numbers, target, 0);

        System.out.println("\nIterative Linear Search Result: " + iterativeResult);
        System.out.println("Recursive Linear Search Result: " + recursiveResult);

        // Edge case: element not found
        int notFound = 99;
        System.out.println("\nSearching for element not in array (" + notFound + "):");
        System.out.println("Result: " + linearSearchIterative(numbers, notFound));
    }
}

/*
--------------------------------
Example Output:

Array: [10, 23, 45, 70, 11, 15]
Searching for: 70

Iterative Linear Search Result: 3
Recursive Linear Search Result: 3

Searching for element not in array (99):
Result: -1
--------------------------------

Time Complexity:
- Best Case: O(1)
- Average & Worst Case: O(n)
Space Complexity:
- Iterative: O(1)
- Recursive: O(n) (due to call stack)
*/
