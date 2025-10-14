// Helper function to swap elements in the array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Partition function: Places pivot in correct position and rearranges elements
function partition(arr, low, high) {
  // Choose the rightmost element as pivot
  const pivot = arr[high];
  let i = low - 1; // Index of smaller element

  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  // Place pivot in correct position
  swap(arr, i + 1, high);
  return i + 1; // Return pivot's final position
}

// Recursive quicksort function
function quickSort(arr, low = 0, high = arr.length - 1) {
  // Base case: if low < high, array has more than one element
  if (low < high) {
    // Partition the array
    const pi = partition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr; // Return the sorted array
}

// Example usage and testing
const exampleArray = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", exampleArray);

const sortedArray = quickSort([...exampleArray]); // Use spread to avoid mutating original
console.log("Sorted array:", sortedArray);

// Additional test case: Already sorted array
const sortedTest = [1, 2, 3, 4, 5];
console.log("Already sorted array before:", sortedTest);
quickSort(sortedTest);
console.log("Already sorted array after:", sortedTest);

// Additional test case: Reverse sorted (worst case demo)
const reverseTest = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Reverse sorted array before:", reverseTest);
quickSort(reverseTest);
console.log("Reverse sorted array after:", reverseTest);

// Output:
// Original array: [3, 6, 8, 10, 1, 2, 1]
// Sorted array: [1, 1, 2, 3, 6, 8, 10]
// Already sorted array before: [1, 2, 3, 4, 5]
// Already sorted array after: [1, 2, 3, 4, 5]
// Reverse sorted array before: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Reverse sorted array after: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]