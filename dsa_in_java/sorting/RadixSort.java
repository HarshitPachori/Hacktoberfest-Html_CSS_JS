/*
 * Topic: Radix Sort
 * Language: Java
 *
 * Description:
 * Radix Sort sorts integers by processing individual digits.
 * It uses Counting Sort as a subroutine to sort digits.
 *
 * Time Complexity:
 * O(nk), where k = number of digits.
 *
 * Space Complexity:
 * O(n + k)
 */

public class RadixSort {

    public static void countingSort(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];

        for (int i = 0; i < n; i++)
            count[(arr[i] / exp) % 10]++;

        for (int i = 1; i < 10; i++)
            count[i] += count[i - 1];

        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }

        for (int i = 0; i < n; i++)
            arr[i] = output[i];
    }

    public static void radixSort(int[] arr) {
        int max = arr[0];
        for (int num : arr)
            if (num > max) max = num;

        for (int exp = 1; max / exp > 0; exp *= 10)
            countingSort(arr, exp);
    }

    public static void printArray(int[] arr) {
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
        System.out.println("Original array:");
        printArray(arr);

        radixSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}

/*
 * Example Output:
 * ------------------------------
 * Original array:
 * 170 45 75 90 802 24 2 66
 * Sorted array:
 * 2 24 45 66 75 90 170 802
 */