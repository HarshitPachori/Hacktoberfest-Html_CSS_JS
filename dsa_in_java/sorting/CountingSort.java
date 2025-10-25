/*
 * Topic: Counting Sort
 * Language: Java
 *
 * Description:
 * Counting Sort is a non-comparison-based algorithm suitable for integers within a known range.
 * It counts occurrences of each element and uses that information to build the sorted array.
 *
 * Time Complexity:
 * O(n + k), where k = range of input.
 *
 * Space Complexity:
 * O(n + k)
 */

public class CountingSort {

    public static void countingSort(int[] arr) {
        int max = arr[0];
        for (int num : arr)
            if (num > max) max = num;

        int[] count = new int[max + 1];

        // Count occurrences
        for (int num : arr)
            count[num]++;

        // Reconstruct sorted array
        int index = 0;
        for (int i = 0; i <= max; i++) {
            while (count[i] > 0) {
                arr[index++] = i;
                count[i]--;
            }
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 2, 8, 3, 3, 1};
        System.out.println("Original array:");
        printArray(arr);

        countingSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}


/*
 * Example Output:
 * ------------------------------
 * Original array:
 * 4 2 2 8 3 3 1
 * Sorted array:
 * 1 2 2 3 3 4 8
 */