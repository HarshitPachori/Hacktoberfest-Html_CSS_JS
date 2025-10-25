/*
 * Topic: Insertion Sort
 * Language: Java
 *
 * Description:
 * Insertion Sort builds the sorted array one element at a time by repeatedly inserting
 * the next element into the correct position.
 *
 * Time Complexity:
 * Best Case (Nearly Sorted) → O(n)
 * Average & Worst Case → O(n^2)
 *
 * Space Complexity:
 * O(1) – In-place sorting.
 */

public class InsertionSort {

    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;

            // Move elements greater than key one position ahead
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        System.out.println("Original array:");
        printArray(arr);

        insertionSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}

/*
 * Example Output:
 * ------------------------------
 * Original array:
 * 12 11 13 5 6
 * Sorted array:
 * 5 6 11 12 13
 */