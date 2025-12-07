let adjective = "Crazy Amazing Fire";
let Name = "Engin Foods Garments";
let Another = "Bros Limited Hub";

let S1 ="";
let S2 ="";
let S3 ="";
function add(S1, S2, S3) {
    return S1+" " + S2 +" "  + S3;
}




//for string 1
{ 
    let x = Math.random();
if (x >= 0 && x < 0.33) {
     S1 = adjective.slice(0, 5);
}
else if (x >= 0.33 && x < 0.66) {
     S1 = adjective.slice(6, 14);
}
else {
     S1 = adjective.slice(13);
}
}

//for string 2
{
    let x = Math.random();
if (x >= 0 && x < 0.33) {
     S2 ="Engin";
}
else if (x >= 0.33 && x < 0.66) {
     S2 = "Foods";
}
else {
     S2 = "Garments";
}
}

//for string 3
{
    let x = Math.random();

if (x >= 0 && x < 0.33) {
     S3 = "Bros";
}
else if (x >= 0.33 && x < 0.66) {
     S3 = "limited";
}
else {
     S3 = "Hubs";
}
}

console.log(add(S1,S2,S3));


// Main(adjective,Name,Another);

// function Main(value1,value2,value3){
//     if(value1=adjective){

//     }
//     if(value2=Name){

//     }
//     if(value3=Another){

//     }


// }

// let Finalname = add(S1,S2,S3);
// console.log(S1);




