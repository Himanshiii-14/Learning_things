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

//function characterstics -- first class citizens
// 1. they can be assigned to a variable
// 2. they can be passed as an argument to another function
// 3. they can be returned from another function
// 4. they can be stored in a data structure like an array or an object

//for this case the memory allocation done in global 
// execution context and the value of a is undefined because it is declared but not initialized yet.
function add(a, b) {
    return a + b;
}

//but in this case the memory allocation done for variable sum not for the function
// it is defined in script
// but if we change this to var then the memory allocation would be in global
let sum = function(a, b) {
    return a + b;
}; // assigning the function to a variable


//inside the function a local execution is created with vlaues of a and b and
// the refernce to the outer scope where the function is defined. 
// so when we call the function it will look for the values of a and b in the local execution context and then it will return the sum of a and b.
console.log("log the function assigned to a variable:", sum);
console.log("log the result of calling the function assigned to a variable:", sum(2, 3)); // logs 5
console.log("log the fucntion itself:", add); // logs the function definition
console.log("log the result of calling the function:", add(2, 3)); // logs 5


//passing function as arguments
function addNum (a,b){
    return a + b;
}

function diffNum (a,b){
    return a - b;
}

function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}

console.log("log the results when function passed as arguments");
console.log(operateOnNumbers(2,3, addNum)); // logs 5
console.log(operateOnNumbers(2,3, diffNum)); // logs -1

//HIgher order functions
// A higher-order function is a function that takes another function as an argument or 
// returns a function as a result.