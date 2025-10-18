// ================================
// 1️⃣ Simple Recursive Fibonacci
// ================================
function fibonacciRecursive(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive call
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// ================================
// 2️⃣ Fibonacci using Backtracking (sequence building)
// ================================
function fibonacciBacktrack(n, sequence = []) {
    // Base cases
    if (n === 0) return sequence;
    if (sequence.length === 0) sequence.push(0);
    if (sequence.length === 1) sequence.push(1);

    // Add next Fibonacci number
    const nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextFib);

    // Recursive call until we have n numbers
    return fibonacciBacktrack(n - 1, sequence);
}

// ================================
// 3️⃣ Recursive Fibonacci with Memoization (optimized)
// ================================
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

console.log("Simple Recursion:");
for (let i = 0; i < n; i++) {
    console.log(fibonacciRecursive(i));
}

console.log("\nBacktracking Sequence:");
console.log(fibonacciBacktrack(n));

console.log("\nMemoization (Optimized Recursion):");
for (let i = 0; i < n; i++) {
    console.log(fibonacciMemo(i));
}


