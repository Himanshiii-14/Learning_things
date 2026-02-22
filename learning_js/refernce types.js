//refernece type - onjects, arryas, functions
//OBJECTS : it is a collection of key value pair
// why need them?
// when we want details we dont want to acces individually mean if i say student then its age, class gender all 
//should be visible at once , mean grouping the data (irrespective of dataype)

let course = {
    title : "javascript",
    price: 567,
    isAvailable : true
};

console.log("course object is :", course);
console.log("type is:", typeof(course));

//accessing a key of the object
// 2 methods -- . method and [] method
//in [] both '' and "" works
console.log("title via dot method :", course.title);
console.log("title datatype via dot method :", typeof(course.title));

console.log("price via bracket method : ", course['price']);
console.log("price data type via braket method :", typeof(course["price"]));
