//callbacks
// A callback is a function that is passed as an argument to another function and is executed 
// after some operation is completed.
// It allows us to handle asynchronous operations and ensure that certain code is 
// executed only after a specific task is finished.

//pros of callbacks
// 1. Callbacks allow us to handle asynchronous operations, such as API calls, 
//    without blocking the main thread of execution.
// 2. They enable us to create more flexible and reusable code by allowing us to    pass different functions as callbacks to the same higher-order function.
// 3. Callbacks can help us manage complex workflows and ensure that certain code is 
//    executed in a specific order.

//cons of callbacks
// 1. Callbacks can lead to "callback hell" or "pyramid of doom" when we have multiple nested callbacks, making the code difficult to read and maintain.
// 2. They can make error handling more complicated, as errors may need to be handled in multiple places within the callback chain.
// 3. Callbacks can lead to issues with "this" context, especially when using traditional function expressions, which can cause confusion and bugs if not handled properly.

function fetchData(callback) {
    setTimeout(() => {
        let data = { name: "John", age: 30 };
        callback(data, null); // Call the callback with data and no error
    }, 2000);
}

function handleData(data, error) {  
    if (error) {
        console.error("Error fetching data:", error);
    } else {
        console.log("Data received:", data);
    }
}

fetchData(handleData); // Pass the callback function to fetchData