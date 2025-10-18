/**
 * @function leftRotateByKPlaces
 * @description Rotates an array to the left by k places using the reversal algorithm.
 * This is an in-place algorithm, meaning it doesn't use extra space proportional to the input array size.
 *
 * Time Complexity: O(n)
 * The algorithm involves three separate reverse operations.
 * 1. Reverse the first k elements: O(k)
 * 2. Reverse the rest of the n-k elements: O(n-k)
 * 3. Reverse the entire array: O(n)
 * The total time complexity is O(k) + O(n-k) + O(n) = O(2n), which simplifies to O(n),
 * where 'n' is the number of elements in the array.
 *
 * Space Complexity: O(1)
 * The rotation is performed in-place. We are not using any auxiliary data structures
 * that scale with the input size. The space used for temporary variables during the swap
 * is constant, hence the space complexity is O(1).
 */
function leftRotateByKPlaces(arr, k) {
  // If the array is empty or has only one element, no rotation is needed.
  if (!arr || arr.length <= 1) {
    return arr;
  }

  const n = arr.length;
  // Handle cases where k is greater than the array length.
  // Rotating by n places results in the original array, so we take the modulo.
  k = k % n;
  
  // If k is 0, no rotation is needed.
  if (k === 0) {
    return arr;
  }

  const reverse = (subArr, start, end) => {
    while (start < end) {
      // Swap elements at the start and end pointers
      [subArr[start], subArr[end]] = [subArr[end], subArr[start]];
      start++;
      end--;
    }
  };

  // Step 1: Reverse the first k elements
  // Example: arr = [1, 2, 3, 4, 5, 6, 7], k = 3. Reversing first 3 elements gives: [3, 2, 1, 4, 5, 6, 7]
  reverse(arr, 0, k - 1);

  // Step 2: Reverse the remaining n-k elements.Reversing elements from index 3 to 6 gives: [3, 2, 1, 7, 6, 5, 4]
  reverse(arr, k, n - 1);

  // Step 3: Reverse the entire array.Reversing the whole array gives the final result: [4, 5, 6, 7, 1, 2, 3]
  reverse(arr, 0, n - 1);

  return arr;
}

// --- Examples ---

// Example 1: Basic rotation
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
console.log(`Original Array 1: [${arr1}]`);
console.log(`Rotate by: ${k1} places`);
leftRotateByKPlaces(arr1, k1);
console.log(`Rotated Array 1:  [${arr1}]`); // Expected output: [4, 5, 6, 7, 1, 2, 3]
console.log('---------------------------------');


// Example 2: Rotation by a number larger than array length
const arr2 = [10, 20, 30, 40, 50];
const k2 = 7; // Equivalent to rotating by 7 % 5 = 2 places
console.log(`Original Array 2: [${arr2}]`);
console.log(`Rotate by: ${k2} places`);
leftRotateByKPlaces(arr2, k2);
console.log(`Rotated Array 2:  [${arr2}]`); // Expected output: [30, 40, 50, 10, 20]
console.log('---------------------------------');


// Example 3: Rotation by 0
const arr3 = [5, 10, 15, 20];
const k3 = 0;
console.log(`Original Array 3: [${arr3}]`);
console.log(`Rotate by: ${k3} places`);
leftRotateByKPlaces(arr3, k3);
console.log(`Rotated Array 3:  [${arr3}]`); // Expected output: [5, 10, 15, 20]
console.log('---------------------------------');

// Example 4: Edge case with a small array
const arr4 = [1, 2];
const k4 = 1;
console.log(`Original Array 4: [${arr4}]`);
console.log(`Rotate by: ${k4} places`);
leftRotateByKPlaces(arr4, k4);
console.log(`Rotated Array 4:  [${arr4}]`); // Expected output: [2, 1]
console.log('---------------------------------');