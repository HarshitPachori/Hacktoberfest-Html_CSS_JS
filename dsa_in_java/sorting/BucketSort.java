/*
 * Topic: Bucket Sort
 * Language: Java
 *
 * Description:
 * Bucket Sort divides the array elements into several buckets and then sorts each bucket individually
 * (often using Insertion Sort), then concatenates them.
 *
 * Time Complexity:
 * Best Case → O(n + k)
 * Average Case → O(n + k)
 * Worst Case → O(n^2)
 *
 * Space Complexity:
 * O(n + k)
 */

import java.util.*;

public class BucketSort {

    public static void bucketSort(float[] arr) {
        int n = arr.length;
        @SuppressWarnings("unchecked")
        ArrayList<Float>[] buckets = new ArrayList[n];

        for (int i = 0; i < n; i++)
            buckets[i] = new ArrayList<>();

        // Place elements into buckets
        for (float num : arr) {
            int idx = (int) (num * n);
            buckets[idx].add(num);
        }

        // Sort each bucket
        for (ArrayList<Float> bucket : buckets)
            Collections.sort(bucket);

        // Combine all buckets
        int index = 0;
        for (ArrayList<Float> bucket : buckets)
            for (float num : bucket)
                arr[index++] = num;
    }

    public static void printArray(float[] arr) {
        for (float num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        float[] arr = {0.78f, 0.17f, 0.39f, 0.26f, 0.72f, 0.94f, 0.21f, 0.12f, 0.23f, 0.68f};
        System.out.println("Original array:");
        printArray(arr);

        bucketSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}

/*
 * Example Output:
 * ------------------------
 * Original array:
 * 0.78 0.17 0.39 0.26 0.72 0.94 0.21 0.12 0.23 0.68
 * Sorted array:
 * 0.12 0.17 0.21 0.23 0.26 0.39 0.68 0.72 0.78 0.94
 */