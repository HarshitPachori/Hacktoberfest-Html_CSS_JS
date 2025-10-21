/**
 * Min Heap Sort Algorithm (Comparison Sort)
 * -----------------------------------------
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 *
 * Space Complexity: O(1) (In-place sort)
 *
 * Description: Implementation of Heap Sort using a Min Heap to sort in descending order.
 */

/**
 * minHeapify ensures that the subtree rooted at index 'i' follows the min heap property.
 * @param {Array<number>} arr - The array representing the heap.
 * @param {number} n - The size of the heap.
 * @param {number} i - The index of the root of the subtree to heapify.
 */
function minHeapify(arr, n, i) {
  let smallest = i; // Initialize smallest as root
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is smaller than root
  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  // If right child is smaller than current smallest
  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  // If smallest is not the root, swap and heapify down
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; // Swap
    minHeapify(arr, n, smallest);
  }
}

/**
 * minHeapSort sorts an array in descending order.
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function minHeapSort(arr) {
  const n = arr.length;

  // 1. Build a min heap.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, n, i);
  }

  // 2. Extract elements from heap.
  for (let i = n - 1; i > 0; i--) {
    // Move current root (smallest element) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call minHeapify on the reduced heap
    minHeapify(arr, i, 0);
  }

  return arr;
}

// Example Demonstrations
const example5 = [38, 27, 43, 3, 9, 82, 10];
console.log("\n Min Heap Sort (Descending):");
console.log("Input:", example5);
console.log("Sorted:", minHeapSort([...example5]));