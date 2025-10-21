/**
 * Max Heap Sort Algorithm (Comparison Sort)
 * -----------------------------------------
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 *
 * Space Complexity: O(1) (In-place sort)
 *
 * Description: Implementation of Heap Sort using a Max Heap to sort in ascending order.
 */

/**
 * maxHeapify ensures that the subtree rooted at index 'i' follows the max heap property.
 * @param {Array<number>} arr - The array representing the heap.
 * @param {number} n - The size of the heap.
 * @param {number} i - The index of the root of the subtree to heapify.
 */
function maxHeapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than current largest
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not the root, swap them and heapify the affected subtree
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    maxHeapify(arr, n, largest); // Recursively heapify the subtree
  }
}

/**
 * maxHeapSort sorts an array in ascending order using the heap sort algorithm.
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function maxHeapSort(arr) {
  const n = arr.length;

  // 1. Build a max heap from the array.
  // We start from the last non-leaf node and go up to the root.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }

  // 2. Extract elements from the heap one by one.
  for (let i = n - 1; i > 0; i--) {
    // Move the current root (max element) to the end of the array
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call maxHeapify on the reduced heap (size is 'i')
    maxHeapify(arr, i, 0);
  }

  return arr;
}

// Example Demonstrations
const example4 = [12, 11, 13, 5, 6, 7];
console.log(" Max Heap Sort (Ascending):");
console.log("Input:", example4);
// Note: We create a copy with [...example4] because heap sort is in-place and modifies the array.
console.log("Sorted:", maxHeapSort([...example4]));