/**
 * Palindrome Checker Implementations
 *
 * A palindrome is a string that reads the same forward and backward
 * after removing non-alphanumeric characters and ignoring case.
 *
 * Examples:
 * - "racecar" => palindrome
 * - "A man, a plan, a canal: Panama" => palindrome
 * - "hello" => not a palindrome
 */

/**
 * Method 1: Reverse-and-Compare (Simple)
 *
 * Cleans the string, reverses it, and compares with original.
 *
 * @param {string} input - String to check
 * @returns {boolean} True if palindrome, otherwise false
 *
 * Time Complexity: O(n) — building reversed string
 * Space Complexity: O(n) — creates a reversed copy
 */
function isPalindromeReverse(input) {
    const cleaned = String(input).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

/**
 * Method 2: Two-Pointer (Optimal space)
 *
 * Uses two indices moving towards the center, skipping non-alphanumerics.
 *
 * @param {string} input - String to check
 * @returns {boolean} True if palindrome, otherwise false
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function isPalindromeTwoPointer(input) {
    const s = String(input);
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && /[^a-zA-Z0-9]/.test(s[left])) left++;
        while (left < right && /[^a-zA-Z0-9]/.test(s[right])) right--;

        if (left < right) {
            const lc = s[left].toLowerCase();
            const rc = s[right].toLowerCase();
            if (lc !== rc) return false;
            left++;
            right--;
        }
    }
    return true;
}

/**
 * Method 3: Recursive Two-Pointer (Educational)
 *
 * Recursively validates characters from both ends.
 *
 * @param {string} input - String to check
 * @returns {boolean} True if palindrome, otherwise false
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) — recursion stack
 */
function isPalindromeRecursive(input) {
    const s = String(input);

    function helper(l, r) {
        while (l < r && /[^a-zA-Z0-9]/.test(s[l])) l++;
        while (l < r && /[^a-zA-Z0-9]/.test(s[r])) r--;
        if (l >= r) return true;
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        return helper(l + 1, r - 1);
    }

    return helper(0, s.length - 1);
}

// Example usage and quick checks
console.log("=== Palindrome Checker Examples ===\n");

const examples = [
    'racecar',
    'RaceCar',
    'A man, a plan, a canal: Panama',
    'No lemon, no melon',
    'hello',
    '12321',
    '123ab321'
];

examples.forEach(str => {
    console.log(`Input: "${str}"`);
    console.log(`- Reverse: ${isPalindromeReverse(str)}`);
    console.log(`- TwoPointer: ${isPalindromeTwoPointer(str)}`);
    console.log(`- Recursive: ${isPalindromeRecursive(str)}`);
    console.log('');
});

// Export (CommonJS) for potential reuse
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isPalindromeReverse,
        isPalindromeTwoPointer,
        isPalindromeRecursive
    };
}

/**
 * COMPLEXITY ANALYSIS
 * - Reverse-and-Compare:
 *   - Time: O(n)
 *   - Space: O(n)
 * - Two-Pointer (Recommended):
 *   - Time: O(n)
 *   - Space: O(1)
 * - Recursive Two-Pointer:
 *   - Time: O(n)
 *   - Space: O(n)
 */


