/**
 * Integer to Roman Numeral Conversion
 * 
 * Time Complexity: O(1) - We iterate through at most 13 predefined values
 * Space Complexity: O(1) - We use constant extra space for the mapping arrays
 * 
 * Algorithm: Greedy approach using predefined value-symbol pairs
 * We iterate through the values from largest to smallest, subtracting the value
 * and appending the corresponding symbol as many times as possible.
 */

/**
 * Converts an integer to its Roman numeral representation
 * @param {number} num - Integer to convert (1 <= num <= 3999)
 * @returns {string} Roman numeral representation
 */
function intToRoman(num) {
    // Validate input
    if (num < 1 || num > 3999) {
        throw new Error("Number must be between 1 and 3999");
    }
    
    // Define value-symbol pairs in descending order
    // Including subtractive cases (4, 9, 40, 90, 400, 900)
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let result = "";
    
    // Iterate through each value-symbol pair
    for (let i = 0; i < values.length; i++) {
        // Use as many of the current symbol as possible
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }
    
    return result;
}

/**
 * Alternative implementation using a more explicit approach
 * This version shows the step-by-step conversion process
 */
function intToRomanVerbose(num) {
    if (num < 1 || num > 3999) {
        throw new Error("Number must be between 1 and 3999");
    }
    
    let result = "";
    let remaining = num;
    
    // Thousands place (1000 = M)
    if (remaining >= 1000) {
        const thousands = Math.floor(remaining / 1000);
        result += "M".repeat(thousands);
        remaining %= 1000;
    }
    
    // Hundreds place (100 = C, 400 = CD, 500 = D, 900 = CM)
    if (remaining >= 900) {
        result += "CM";
        remaining -= 900;
    } else if (remaining >= 500) {
        result += "D";
        remaining -= 500;
        const additionalHundreds = Math.floor(remaining / 100);
        result += "C".repeat(additionalHundreds);
        remaining %= 100;
    } else if (remaining >= 400) {
        result += "CD";
        remaining -= 400;
    } else if (remaining >= 100) {
        const hundreds = Math.floor(remaining / 100);
        result += "C".repeat(hundreds);
        remaining %= 100;
    }
    
    // Tens place (10 = X, 40 = XL, 50 = L, 90 = XC)
    if (remaining >= 90) {
        result += "XC";
        remaining -= 90;
    } else if (remaining >= 50) {
        result += "L";
        remaining -= 50;
        const additionalTens = Math.floor(remaining / 10);
        result += "X".repeat(additionalTens);
        remaining %= 10;
    } else if (remaining >= 40) {
        result += "XL";
        remaining -= 40;
    } else if (remaining >= 10) {
        const tens = Math.floor(remaining / 10);
        result += "X".repeat(tens);
        remaining %= 10;
    }
    
    // Units place (1 = I, 4 = IV, 5 = V, 9 = IX)
    if (remaining >= 9) {
        result += "IX";
    } else if (remaining >= 5) {
        result += "V";
        remaining -= 5;
        result += "I".repeat(remaining);
    } else if (remaining >= 4) {
        result += "IV";
    } else {
        result += "I".repeat(remaining);
    }
    
    return result;
}

// Example usage and test cases
console.log("=== Integer to Roman Numeral Conversion Examples ===\n");

// Basic examples
console.log("Basic Examples:");
console.log(`3 -> ${intToRoman(3)}`);           // III
console.log(`4 -> ${intToRoman(4)}`);           // IV
console.log(`9 -> ${intToRoman(9)}`);           // IX
console.log(`58 -> ${intToRoman(58)}`);         // LVIII
console.log(`1994 -> ${intToRoman(1994)}`);     // MCMXCIV

console.log("\nEdge Cases:");
console.log(`1 -> ${intToRoman(1)}`);           // I
console.log(`3999 -> ${intToRoman(3999)}`);     // MMMCMXCIX

console.log("\nSubtractive Cases:");
console.log(`4 -> ${intToRoman(4)}`);           // IV
console.log(`9 -> ${intToRoman(9)}`);           // IX
console.log(`40 -> ${intToRoman(40)}`);         // XL
console.log(`90 -> ${intToRoman(90)}`);         // XC
console.log(`400 -> ${intToRoman(400)}`);       // CD
console.log(`900 -> ${intToRoman(900)}`);       // CM

console.log("\nLarge Numbers:");
console.log(`1776 -> ${intToRoman(1776)}`);     // MDCCLXXVI
console.log(`2023 -> ${intToRoman(2023)}`);     // MMXXIII
console.log(`3456 -> ${intToRoman(3456)}`);     // MMMCDLVI

console.log("\nComparing both implementations:");
const testNumbers = [27, 444, 1994, 3999];
testNumbers.forEach(num => {
    const result1 = intToRoman(num);
    const result2 = intToRomanVerbose(num);
    console.log(`${num}: ${result1} | ${result2} | Match: ${result1 === result2}`);
});

// Error handling example
console.log("\nError Handling:");
try {
    intToRoman(4000);
} catch (error) {
    console.log(`Error for 4000: ${error.message}`);
}

try {
    intToRoman(0);
} catch (error) {
    console.log(`Error for 0: ${error.message}`);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { intToRoman, intToRomanVerbose };
}