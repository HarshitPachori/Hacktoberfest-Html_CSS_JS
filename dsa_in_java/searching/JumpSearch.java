// File: JumpSearch.java
// Description: Implementation of Jump Search in Java
// --------------------------------------------------

public class JumpSearch {

    /**
     * Performs Jump Search on a sorted array.
     *
     * @param arr The sorted array
     * @param target The value to search
     * @return The index of target if found, otherwise -1
     */
    public static int jumpSearch(int[] arr, int target) {
        int n = arr.length;
        int step = (int) Math.floor(Math.sqrt(n));
        int prev = 0;

        // Jump ahead until target is found or exceeded
        while (arr[Math.min(step, n) - 1] < target) {
            prev = step;
            step += (int) Math.floor(Math.sqrt(n));
            if (prev >= n)
                return -1;
        }

        // Linear search in the identified block
        while (prev < Math.min(step, n)) {
            if (arr[prev] == target)
                return prev;
            prev++;
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] numbers = {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144};
        int target = 55;

        System.out.println("Array: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]");
        System.out.println("Searching for: " + target);

        int result = jumpSearch(numbers, target);
        System.out.println("\nJump Search Result: " + result);

        // Edge case
        int notFound = 7;
        System.out.println("\nSearching for element not in array (" + notFound + "):");
        System.out.println("Result: " + jumpSearch(numbers, notFound));
    }
}

/*
--------------------------------
Example Output:

Array: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
Searching for: 55

Jump Search Result: 10

Searching for element not in array (7):
Result: -1
--------------------------------

Time Complexity:
O(√n)
Space Complexity:
O(1)
*/
