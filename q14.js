// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const obj ={ number: 6043, age: 21, pt: 96 };
const value1 = Object.values(obj);
console.log(value1);

const value2 = Object.keys(obj).map(key => obj[key])
console.log(value2)

