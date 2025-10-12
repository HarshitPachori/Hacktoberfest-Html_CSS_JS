// 1. Normal Function Declaration
function add(a, b) {
    return a + b;
}

// 2. Arrow Function (equivalent to above)
const addArrow = (a, b) => a + b;

// 3. Normal Function Expression
const multiply = function (a, b) {
    return a * b;
};

// 4. Arrow Function (equivalent to above)
const multiplyArrow = (a, b) => a * b;

// 5. Normal Function with Multiple Statements
function greet(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
    return message;
}

// 6. Arrow Function with Multiple Statements
const greetArrow = (name) => {
    const message = `Hello, ${name}!`;
    console.log(message);
    return message;
};

// 7. Normal Function with Default Parameters
function calculateArea(length, width = 10) {
    return length * width;
}

// 8. Arrow Function with Default Parameters
const calculateAreaArrow = (length, width = 10) => length * width;

// 9. Normal Function with this Context
function Counter() {
    this.count = 0;
    this.increment = function () {
        this.count++;
        console.log(`Count: ${this.count}`);
    };
}

// 10. Arrow Function with this Context (Note: Arrow functions don't bind their own this)
const CounterArrow = function () {
    this.count = 0;
    this.increment = () => {
        this.count++;
        console.log(`Count: ${this.count}`);
    };
};

// Execute examples
console.log("Normal Function (add):", add(5, 3)); // Output: 8
console.log("Arrow Function (addArrow):", addArrow(5, 3)); // Output: 8
console.log("Normal Function (multiply):", multiply(4, 2)); // Output: 8
console.log("Arrow Function (multiplyArrow):", multiplyArrow(4, 2)); // Output: 8
greet("Alice"); // Output: Hello, Alice!
greetArrow("Bob"); // Output: Hello, Bob!
console.log("Normal Function (calculateArea):", calculateArea(5)); // Output: 50
console.log("Arrow Function (calculateAreaArrow):", calculateAreaArrow(5)); // Output: 50

const counter = new Counter();
counter.increment(); // Output: Count: 1
const counterArrow = new CounterArrow();
counterArrow.increment(); // Output: Count: 1