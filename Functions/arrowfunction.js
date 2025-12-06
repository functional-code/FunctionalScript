const varfunction = (x)=>{
    console.log("I am an arrow function",x);
}

varfunction(43);
varfunction(43);
varfunction(43);

const sum =(a,b) =>{
    let c = a +b;
    return c;
}

let y = sum(34,2);
console.log(y);