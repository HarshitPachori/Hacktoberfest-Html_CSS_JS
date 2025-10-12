// Sample string for all examples
const sampleString = "  Hello, World!  ";

// 1. toUpperCase() - Converts string to uppercase
function toUpperCaseExample() {
    console.log("toUpperCase Example:");
    const result = sampleString.toUpperCase();
    console.log(`Original: ${sampleString}`);
    console.log(`Uppercase: ${result}`);
}

// 2. toLowerCase() - Converts string to lowercase
function toLowerCaseExample() {
    console.log("\ntoLowerCase Example:");
    const result = sampleString.toLowerCase();
    console.log(`Original: ${sampleString}`);
    console.log(`Lowercase: ${result}`);
}

// 3. trim() - Removes whitespace from both ends
function trimExample() {
    console.log("\ntrim Example:");
    const result = sampleString.trim();
    console.log(`Original: "${sampleString}"`);
    console.log(`Trimmed: "${result}"`);
}

// 4. slice() - Extracts a portion of the string
function sliceExample() {
    console.log("\nslice Example:");
    const result = sampleString.slice(2, 7);
    console.log(`Original: ${sampleString}`);
    console.log(`Sliced (2,7): ${result}`);
}

// 5. replace() - Replaces first match of a substring
function replaceExample() {
    console.log("\nreplace Example:");
    const result = sampleString.replace("World", "JavaScript");
    console.log(`Original: ${sampleString}`);
    console.log(`Replaced: ${result}`);
}

// 6. split() - Splits string into an array based on a delimiter
function splitExample() {
    console.log("\nsplit Example:");
    const result = sampleString.split(",");
    console.log(`Original: ${sampleString}`);
    console.log(`Split by comma:`, result);
}

// Execute all examples
toUpperCaseExample();
toLowerCaseExample();
trimExample();
sliceExample();
replaceExample();
splitExample();