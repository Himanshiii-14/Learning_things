function createCourse(course)
{
    console.log("creating " + course);
}

// Calling the function before its declaration still works due to function hoisting
createCourse("hld");
createCourse("dsa");

// Understanding how JavaScript code is executed
// Execution Context — the environment that holds information needed to run code,
// such as variables, functions, the value of `this`, and the scope chain.

// The runtime creates a Global Execution Context initially. Each function call creates
// a new execution context that is pushed onto the call stack.

// Execution has two main phases:
// 1) Creation (memory) phase — space is allocated for variables and function declarations.
// 2) Execution (code) phase — code runs line by line using the allocated memory.

// JavaScript is synchronous and single-threaded; execution follows the call stack.
// Because declarations are processed during the creation phase (hoisting), accessing
// a variable before it is assigned returns `undefined` instead of throwing a ReferenceError.
// For example, a variable declared later is visible earlier but has the value `undefined`.

// Hoisting — variables and functions can be referenced before their declarations.
// Note: `var` declarations are initialized as `undefined` during the creation phase;
// `let` and `const` are not accessible before initialization (temporal dead zone).

// Global variables behave slightly differently depending on the environment.
// In browsers like Google Chrome, the global object is called "window".
// Any global variable declared with var becomes a property of the window object.
// Example: var a = 10; → window.a === 10
// In modern JavaScript (ES6+), let and const do not attach to the window object.