console.log("this is functional dead");

let prom1 = new Promise((getResolvedValue,reject) => {
setTimeout(()=>{
    console.log("yes i am functional");
    resolve("arry")
    
})
})
