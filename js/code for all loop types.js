// 1. for Loop
function forLoopExample() {
    console.log("for Loop Example:");
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration ${i}: ${i * 2}`);
    }
}

// 2. while Loop
function whileLoopExample() {
    console.log("\nwhile Loop Example:");
    let count = 0;
    while (count < 5) {
        console.log(`Count: ${count}`);
        count++;
    }
}

// 3. do-while Loop
function doWhileLoopExample() {
    console.log("\ndo-while Loop Example:");
    let num = 0;
    do {
        console.log(`Number: ${num}`);
        num++;
    } while (num < 5);
}

// 4. for...in Loop (for objects)
function forInLoopExample() {
    console.log("\nfor...in Loop Example:");
    const person = { name: "John", age: 30, city: "New York" };
    for (let key in person) {
        console.log(`Key: ${key}, Value: ${person[key]}`);
    }
}

// 5. for...of Loop (for iterables)
function forOfLoopExample() {
    console.log("\nfor...of Loop Example:");
    const array = ['a', 'b', 'c'];
    for (let item of array) {
        console.log(`Item: ${item}`);
    }
}

// 6. Array.forEach Loop
function forEachLoopExample() {
    console.log("\nArray.forEach Loop Example:");
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((number, index) => {
        console.log(`Index ${index}: ${number}`);
    });
}

// Execute all examples
forLoopExample();
whileLoopExample();
doWhileLoopExample();
forInLoopExample();
forOfLoopExample();
forEachLoopExample();