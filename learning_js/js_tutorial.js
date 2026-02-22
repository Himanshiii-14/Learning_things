console.log("Hello, World!");
console.log(10+20);

//learning variables
//Primitive / value types - string, number, boolean, object(null), undefined, symbol
//we can declare the value of a variable as both null and undefined but 
// using undefined is not recommended as it is used by JavaScript to indicate that a 
// variable has not been assigned a value yet. It is better to use null to indicate 
// that a variable has no value.

//JS is a dynamically typed language, which means that we don't need to specify the 
// data type of a variable when we declare it. The data type is determined 
// at runtime based on the value assigned to the variable.

//means we can change the data type of a variable by assigning a different type of value to it.
//static language : c++, jaba, c#
//dynamic language : js, python, ruby, php
let x = "himansi";
console.log(x);
console.log(typeof x);

let y = 10.4;
console.log(y);
console.log(typeof y);

let z = true;
console.log(z);
console.log(typeof z);

let a = null;
console.log(a);
console.log(typeof a);

let b;//when a value is not defined it by default takes it as undefined
console.log(b);
console.log(typeof b);