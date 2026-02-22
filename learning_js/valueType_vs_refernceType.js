// the main differenc ebwtween value type and refernce type id that value type copy only values

// example

let x = "javascript";
let y = x;

x = "c++";
console.log("latest values for x :", x);
console.log("latest values for y :", y); 
//value for x changed but not for y 

let p = {number : 87};
let q = p;
p.number = "eighty seven";

console.log('latest value for p:', p);
console.log('latest value for q:' , q);

//value changes for both