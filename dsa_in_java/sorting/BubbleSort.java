/*
 * Topic: Bubble Sort
 * Language: Java
 *
 * Description:
 * Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.
 * This process is repeated until the array becomes sorted.
 *
 * Time Complexity:
 * Best Case (Already Sorted) → O(n)
 * Average & Worst Case → O(n^2)
 *
 * Space Complexity:
 * O(1) – In-place sorting algorithm.
 */

public class BubbleSort {

    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;

        for (int i = 0; i < n - 1; i++) {
            swapped = false;

            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap adjacent elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            // Optimization: Stop if no swaps occurred
            if (!swapped)
                break;
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original array:");
        printArray(arr);

        bubbleSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}

/*
Example Output:
------------------------
Original array:
64 34 25 12 22 11 90
Sorted array:
11 12 22 25 34 64 90
*/
