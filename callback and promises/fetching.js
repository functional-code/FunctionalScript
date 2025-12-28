function getData(dataId){
    console.log("Feching data.......")

    
    
    return new Promise((resolve, reject)=>{
        if(dataId==1){
             setTimeout(()=>{
            resolve("this is a functional succes");
        },3000)
        }
        else{
              setTimeout(()=>{
            reject("this is a functional fail");
        },1000)
        }
       
    })
}

getData(1).then(value=>{console.log(value); return getData(2).then(value=>{console.log(value)
})
})




    
