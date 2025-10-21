// A Stack class implemented using an array
class Stack {
  // The constructor initializes an empty array to store the stack's elements.
  constructor() {
    this.items = [];
  }

  // push(element): Adds an element to the top of the stack.
  // This corresponds to adding an element to the end of the array.
  push(element) {
    this.items.push(element);
  }

  // pop(): Removes and returns the element at the top of the stack.
  // If the stack is empty, it returns a message.
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // peek(): Returns the top element of the stack without removing it.
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty(): Checks if the stack is empty. Returns true if it is, false otherwise.
  isEmpty() {
    return this.items.length === 0;
  }

  // size(): Returns the number of elements in the stack.
  size() {
    return this.items.length;
  }

  // clear(): Removes all elements from the stack.
  clear() {
    this.items = [];
  }
}
