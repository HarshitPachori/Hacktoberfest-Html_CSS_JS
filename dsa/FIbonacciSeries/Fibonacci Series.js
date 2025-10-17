// ==============================================
// 1️⃣ Simple Recursive Fibonacci (naive recursion)
// ----------------------------------------------
// Time Complexity: O(2^n) (exponential)
// Space Complexity: O(n) (recursion call stack)
// ----------------------------------------------
// Returns the nth Fibonacci number where:
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
// Example: fibonacciRecursive(6) -> 8
function fibonacciRecursive(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive call
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// ==============================================
// 2️⃣ Fibonacci using Backtracking (sequence building)
// ----------------------------------------------
// Generates the first n Fibonacci numbers.
// Time Complexity: O(n)
// Space Complexity: O(n) (result array + recursion depth)
// ----------------------------------------------
// Example: fibonacciBacktrack(7) -> [0,1,1,2,3,5,8]
function fibonacciBacktrack(n, sequence = []) {
    if (n <= 0) return [];

    // Stop when we have exactly n numbers
    if (sequence.length === n) return sequence;

    // Seed initial values
    if (sequence.length === 0) {
        sequence.push(0);
    } else if (sequence.length === 1) {
        sequence.push(1);
    } else {
        // Add next Fibonacci number
        const nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextFib);
    }

    // Recursive call until we have n numbers
    return fibonacciBacktrack(n, sequence);
}

// ==============================================
// 3️⃣ Recursive Fibonacci with Memoization (optimized)
// ----------------------------------------------
// Time Complexity: O(n)
// Space Complexity: O(n) (memo table + recursion call stack)
// ----------------------------------------------
// Returns the nth Fibonacci number using memoization.
// Example: fibonacciMemo(10) -> 55
function fibonacciMemo(n, memo = {}) {
    // Check if value already computed
    if (memo[n] !== undefined) return memo[n];

    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive call + store in memo
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// ================================
// Example Usage
// ================================
const n = 10;

console.log("Simple Recursion (values 0..n-1):");
for (let i = 0; i < n; i++) {
    console.log(`F(${i}) =`, fibonacciRecursive(i));
}

console.log("\nBacktracking Sequence (first n terms):");
console.log(fibonacciBacktrack(n));

console.log("\nMemoization (values 0..n-1):");
for (let i = 0; i < n; i++) {
    console.log(`F(${i}) =`, fibonacciMemo(i));
}


