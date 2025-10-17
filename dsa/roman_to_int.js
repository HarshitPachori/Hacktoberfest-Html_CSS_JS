/**
 * Roman Numeral to Integer
 *
 * Time Complexity: O(n) — single pass through the string with O(1) work per character
 * Space Complexity: O(1) — uses a fixed-size map and a handful of variables
 *
 * Notes on validation (quality > quick-hack):
 * - Accepts uppercase/lowercase input; trims surrounding whitespace
 * - Rejects invalid characters
 * - Enforces core Roman rules:
 *   - Symbols V, L, D cannot repeat
 *   - Symbols I, X, C, M cannot repeat 4+ times consecutively
 *   - Only these subtractive pairs are allowed: IV, IX, XL, XC, CD, CM
 *   - A subtractive pair cannot be preceded by the same smaller symbol (e.g., 'IIX' is invalid)
 *
 * Examples:
 *   romanToInt('III')      -> 3
 *   romanToInt('IV')       -> 4
 *   romanToInt('IX')       -> 9
 *   romanToInt('LVIII')    -> 58   (L=50, V=5, III=3)
 *   romanToInt('MCMXCIV')  -> 1994 (M=1000, CM=900, XC=90, IV=4)
 *   romanToInt('MMXXV')    -> 2025
 */

// Value map for Roman numerals (frozen for safety)
const ROMAN_VALUES = Object.freeze({
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
});

// Allowed subtractive pairs
const ALLOWED_SUBTRACTIVE = new Set(["IV", "IX", "XL", "XC", "CD", "CM"]);

// Symbols that cannot repeat; and ones that can repeat up to 3 times
const NON_REPEATING = new Set(["V", "L", "D"]);
const REPEATABLE_MAX_3 = new Set(["I", "X", "C", "M"]);

/**
 * Converts a Roman numeral string to an integer.
 * Throws an Error on invalid input rather than returning a wrong number silently.
 * @param {string} s - Roman numeral string (e.g. "MCMXCIV")
 * @returns {number} The integer value
 */
function romanToInt(s) {
  if (typeof s !== "string") {
    throw new TypeError("romanToInt: input must be a string");
  }

  const input = s.trim().toUpperCase();
  if (input.length === 0) {
    throw new Error("romanToInt: empty string is not a valid Roman numeral");
  }

  // Quick character validation
  for (let ch of input) {
    if (!(ch in ROMAN_VALUES)) {
      throw new Error(`romanToInt: invalid character '${ch}' in input '${s}'`);
    }
  }

  let total = 0;
  let i = 0;

  // Track consecutive repeats to enforce repetition rules
  let prevChar = null;
  let repeatCount = 0; // number of times current char repeated consecutively so far

  while (i < input.length) {
    const ch = input[i];
    const next = input[i + 1];
    const currVal = ROMAN_VALUES[ch];
    const nextVal = next ? ROMAN_VALUES[next] : 0;

    // Handle repetition counting
    if (ch === prevChar) {
      repeatCount += 1;
      if (NON_REPEATING.has(ch)) {
        throw new Error(
          `romanToInt: '${ch}' cannot repeat (found at index ${i} in '${s}')`
        );
      }
      if (REPEATABLE_MAX_3.has(ch) && repeatCount >= 4) {
        throw new Error(
          `romanToInt: '${ch}' repeated ${repeatCount} times (max 3 allowed) in '${s}'`
        );
      }
    } else {
      prevChar = ch;
      repeatCount = 1; // first occurrence of this char in the current run
    }

    // Subtractive case (e.g., IV, IX, XL, XC, CD, CM)
    if (next && currVal < nextVal) {
      const pair = ch + next;
      if (!ALLOWED_SUBTRACTIVE.has(pair)) {
        throw new Error(
          `romanToInt: invalid subtractive pair '${pair}' in '${s}'`
        );
      }
      // Prevent cases like 'IIX' or 'XXL' — the smaller symbol can't appear more than once before subtraction
      if (repeatCount > 1) {
        throw new Error(
          `romanToInt: invalid repetition before subtractive pair '${pair}' in '${s}'`
        );
      }

      total += nextVal - currVal;

      // Move past the pair; reset repetition tracking since we're switching symbol
      i += 2;
      prevChar = null;
      repeatCount = 0;
      continue;
    }

    // Normal additive case
    total += currVal;
    i += 1;
  }

  return total;
}

// -----------------------------------------------------------------------------
// Example usages and console outputs (acts as a tiny sanity test harness)
// -----------------------------------------------------------------------------
function demo() {
  const examples = [
    "III",
    "IV",
    "IX",
    "LVIII",
    "MCMXCIV",
    "MMXXV", // 2025 (current year +ish)
  ];

  console.log("Roman to Integer — examples:\n");
  for (const r of examples) {
    console.log(`${r} -> ${romanToInt(r)}`);
  }

  // A few invalid cases to show helpful errors
  const invalid = ["IIII", "VV", "VX", "IL", "IC", "IIX", "XM"]; // not standard Roman
  console.log("\nInvalid inputs (expect errors):\n");
  for (const r of invalid) {
    try {
      const val = romanToInt(r);
      console.log(`${r} -> ${val} (unexpected)`);
    } catch (err) {
      console.log(`${r} -> Error: ${err.message}`);
    }
  }
}

// Run demo when executed directly (node roman_to_int.js)
if (typeof require !== "undefined" && require.main === module) {
  demo();
}

// Export for potential reuse in other scripts/tests
if (typeof module !== "undefined") {
  module.exports = { romanToInt };
}
