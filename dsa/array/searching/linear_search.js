/*
  DSA: Linear Search
  ------------------
  Stability: Not applicable (search algorithm) — returns first matching index
  Time Complexity (best/avg/worst): O(1) / O(n) / O(n)
  Space Complexity: O(1)

  Exposes:
    • linearSearch(arr, target)              → index or -1
    • linearSearchBy(arr, key, selector)     → index or -1 (generic via selector)

  Notes:
    - Scans left-to-right and returns the FIRST match's index.
    - Uses Object.is for equality so that NaN comparisons behave as expected.
*/

/**
 * Linear search for a value in an array.
 * Returns the index of the first occurrence or -1 if not found.
 */
export function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // Using Object.is so that Object.is(NaN, NaN) === true
    if (Object.is(arr[i], target)) return i;
  }
  return -1;
}

/**
 * Generic linear search using a selector function.
 * Example: linearSearchBy(users, 7, u => u.id)
 */
export function linearSearchBy(arr, key, selector = x => x) {
  for (let i = 0; i < arr.length; i++) {
    if (Object.is(selector(arr[i]), key)) return i;
  }
  return -1;
}

// tiny self-checks in console
(function selfTest() {
  const numbers = [41, 7, 7, 19, 23, NaN, 5];
  const i1 = linearSearch(numbers, 7);      // expect 1 (first 7)
  const i2 = linearSearch(numbers, 100);    // expect -1
  const i3 = linearSearch(numbers, NaN);    // expect 5 due to Object.is

  const books = [
    { isbn: "A1", title: "Eloquent JS" },
    { isbn: "B2", title: "You Don't Know JS" },
    { isbn: "C3", title: "JavaScript Patterns" },
  ];
  const byIsbn = linearSearchBy(books, "B2", b => b.isbn); // expect 1
  const byTitle = linearSearchBy(books, "JavaScript Patterns", b => b.title); // expect 2

  const out = document.getElementById("consoleOut");
  if (out) {
    out.textContent += "\n[Linear Search]\n";
    out.textContent += `Index of 7 in [${numbers.join(", ")}] → ${i1}\n`;
    out.textContent += `Index of 100 in [${numbers.join(", ")}] → ${i2}\n`;
    out.textContent += `Index of NaN in [${numbers.join(", ")}] → ${i3}\n`;
    out.textContent += `Index of isbn=B2 in books → ${byIsbn}\n`;
    out.textContent += `Index of title="JavaScript Patterns" in books → ${byTitle}\n`;
  } else {
    // fallback when not on the demo page
    console.log({ i1, i2, i3, byIsbn, byTitle });
  }
})();


/**
 * Algorithm: Linear Search
 * 
 * Time Complexity:
 *  -Best Case: O(1) When the element is found at the beginning
 *  -Worst Case: O(n) When the element is found at the end or not present
 *  -Average Case: O(n)
 * 
 * Space Complexity: O(1) (in-place i.e no extra space)
 * 
 * Description:
 *   Linear Search is the simplest searching algorithm
 *  It checks each element of the array one by one until the target element is found
 *   or the array ends.
 */

/**
 * Performs a linear search on an array to find the target element.
 * @param {Array} arr - The array to search in.
 * @param {*} target - The element to find.
 * @returns {number} The index of the target if found, else -1.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===target) {
            //here, === compares the value as well as the datatype
            return i; // Target found at index i
        }
    }
    return -1; 
}

//returning -1 indicates that the target is not found in the array

//Example 1: for integers
const arr1 = [10, 23, 45, 70, 11, 15];
const target1 = 70;
console.log(`Array: ${arr1}`);
console.log(`Searching for ${target1} --> Index Found:`, linearSearch(arr1, target1));

//Example 2: for strings
const arr2 = ["apple", "banana", "cherry", "date"];
const target2 = "kiwi";
console.log(`\nArray: ${arr2}`);
console.log(`Searching for "${target2}" --> Index Found:`, linearSearch(arr2, target2));

//Example 3:
const arr3 = [1, 3, 5, 7, 9];
const target3 = 5;
console.log(`\nArray: ${arr3}`);
console.log(`Searching for ${target3} --> Index Found:`, linearSearch(arr3, target3));
