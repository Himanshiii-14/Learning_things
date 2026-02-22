function add(a, b) {
    return a + b;
}

//the above function can be written as
let sum = function(a, b) {
    return a + b;
}

//or
let sum2 = (a,b) => {
    return a + b;
}

const addArrow = (a, b) => a + b; // arrow function syntax
//use when need to return just a single expression and no need to use the 
// return keyword or curly braces

//returning one function from another function
function outer () {
    function inner () {
        console.log('Hello from inner function!');
    }
    return inner;
}
let outputfunc = outer();
//let innerFunc = inner();
outputfunc();
//console.log("log the result of calling the outer function which returns inner function:", innerFunc);
console.log("log outer function which returns inner function:", outputfunc);

//functions + lixical scope == closures
// A closure is a function that has access to its own scope, the outer function's scope, 
// and the global scope. 
// It allows the inner function to access and manipulate variables from the outer function 
// even after the outer function has finished executing.

// Example 1: closure that keeps a reference to a local variable
function outerFunction() {
    let outerVariable = 'I am from outer function';
    function innerFunction() {
        console.log(outerVariable);
    }
    function setOuter(value) {
        outerVariable = value; // mutate the closed-over variable
    }
    return { innerFunction, setOuter };
}
let closure = outerFunction();
closure.innerFunction(); // logs: I am from outer function
closure.setOuter('I am changed now');
closure.innerFunction(); // logs: I am changed now

// Example 2: closure referencing a shared external variable
let a = 10;
function outer() {
    a = 100; // modifies the same `a` the closure will reference
    function inner() {
        console.log(a);
    }
    return inner;
}
let returnedFuncVar = outer();
a = 20;                // later mutation of the same `a`
console.log(returnedFuncVar); // logs the function object
returnedFuncVar();            // logs: 20 (closure sees latest value)