let a = 20;
let b = 20;

let k = Math.random();
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

if( k>0.10){
    console.log("the addtion of the two number is "+add(a,b))
    console.log("the substraction of the two number is "+sub(a,b))
    console.log("the multiplication of the two number is "+mul(a,b))
    console.log("the divition of the two number is "+div(a,b))

}
else{
    console.log("the addtion of the two number is "+div(a,b))
    console.log("the substraction of the two number is "+mul(a,b))
    console.log("the multiplication of the two number is "+sub(a,b))
    console.log("the divition of the two number is "+add(a,b))


}