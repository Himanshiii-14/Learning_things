//console.log("accessing a (a defined by let later):", a); //not able to access a 
// //because of temporal dead zone (TDZ) for let and const 
//error thrown: ReferenceError: Cannot access 'a' before initialization

console.log("accessing b (b defined by var later):", b); 

let a = 10;
var b = 20;

//difference
//const , let are strict than var. They do not allow you to use undeclared variables, 
// which can help prevent bugs and improve code readability.
// const and let are block scoped, while var is function scoped.
// Variables declared with var are hoisted to the top of their scope and initialized 
// with undefined, while let and const are hoisted but not initialized, 
// leading to a temporal dead zone until their declaration is evaluated.

// avoid using var in modern JavaScript development, 
// and prefer let and const for better code quality and maintainability.

// using var an dif no value assigned to it then that is taking unnecessary space in memory 
// and also it is taking the value undefined which is not good for code readability and 
// maintainability. so good practice is to define all the variables in the top 

// {} this is a block either use in fucntion or if-else
// const and let are block scoped, which means they are only accessible within the block they are defined in.
// var is function scoped, which means it is accessible throughout the entire function it is defined in, 
// regardless of block boundaries. This can lead to unintended consequences if not used carefully.

{
    var p = 10;
    const q = 20;
    let r = 30;

    console.log("accessing p inside the block:", p);
console.log("accessing q inside the block:", q); 
console.log("accessing r inside the block:", r);
}

console.log("accessing p outside the block:", p);

//for this got error reference error: ReferenceError: q is not defined
//console.log("accessing q outside the block:", q); 
//console.log("accessing r outside the block:", r);

//when we define a fucntion a context local execution context is created and all the 
// variables and functions defined inside that function are only accessible within that 
// function.

function hello() {
    let x = 10;
    console.log("value of x", x);
}

let x = 100;
hello(); // here the value of x is 10 because the local execution context of the function 
// hello is created and the value of x is 10 in that context.

// if no value for x might be provided then it output will be 100 becuase it will get the value from 
//outerscope
// local score -->> outer scope -->> global scope
// lexical scope -->> the scope of a variable is determined by its position in the 
// source code, and nested functions have access to variables declared in their outer scope.

function hello_1() {
    console.log("value of y", y);
}

let y = 100;
hello_1();