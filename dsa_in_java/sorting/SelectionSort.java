/*
 * Topic: Selection Sort
 * Language: Java
 *
 * Description:
 * Selection Sort repeatedly selects the smallest (or largest) element from the unsorted part
 * and moves it to the beginning of the sorted part.
 *
 * Time Complexity:
 * Best, Average, Worst → O(n^2)
 *
 * Space Complexity:
 * O(1) – In-place sorting.
 */

public class SelectionSort {

    public static void selectionSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;

            // Find the minimum element in remaining array
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx])
                    minIdx = j;
            }

            // Swap the found minimum with the first element
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};
        System.out.println("Original array:");
        printArray(arr);

        selectionSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}

/*
 * Example Output:
 * ------------------------------
 * Original array:
 * 29 10 14 37 13
 * Sorted array:
 * 10 13 14 29 37
 */