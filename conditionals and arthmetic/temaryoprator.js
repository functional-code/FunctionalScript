let a = 34;
let b =45;

let c = a>b? (a-b) :(b<a) ? (a+b+b):a-b;
console.log(c);

//print if the number is greater than 0 to 10 and below and above 

a<0? console.log("smaller"): a>=0 && a<=10 ? console.log("this number is good"):console.log("greater");