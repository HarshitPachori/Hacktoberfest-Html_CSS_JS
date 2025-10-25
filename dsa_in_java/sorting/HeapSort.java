/*
 * Topic: Heap Sort
 * Language: Java
 *
 * Description:
 * Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.
 * It first builds a max-heap and then repeatedly extracts the maximum element to get a sorted array.
 *
 * Time Complexity:
 * Best, Average, Worst → O(n log n)
 *
 * Space Complexity:
 * O(1) – In-place sorting.
 */

public class HeapSort {

    public static void heapify(int[] arr, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest])
            largest = left;

        if (right < n && arr[right] > arr[largest])
            largest = right;

        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            heapify(arr, n, largest);
        }
    }

    public static void heapSort(int[] arr) {
        int n = arr.length;

        // Build max-heap
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        // Extract elements from heap
        for (int i = n - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            heapify(arr, i, 0);
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        System.out.println("Original array:");
        printArray(arr);

        heapSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}


/*
 * Example Output:
 * ------------------------------
 * Original array:
 * 12 11 13 5 6 7
 * Sorted array:
 * 5 6 7 11 12 13
 */