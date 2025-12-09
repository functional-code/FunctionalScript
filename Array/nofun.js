let arr = [1,2,3,4,5,6,7];
let she = ["she is cute , she is introvert both were introvert"];
let me = [ " i am atangvadi , i am super introvert , i like to see dead bodies"];

console.log(arr);

console.log(arr.join("-"));

//pop out the indexed value from the array

console.log(arr.pop()); //last element 
console.log(arr);

console.log(arr.shift()); //first element 
console.log(arr);


//adding

arr.push("this is the end"); 
//push the element to the last index

//push the element to the first
console.log(arr.unshift("this is the start"));


//delete last element
// delete(a[4]);

console.log(arr.concat(she,me));
