// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(callback){
    setTimeout( ()=>{
        console.log("walk the dog");
        callback()
        
    },1500)
}
function cleanKitchen(callback){
    setTimeout( ()=>{
        console.log("Clean the Khichen");
        callback()
    },2500)
}
function tashOut(callback){
    setTimeout( ()=>{
        console.log("throw the trash out");
        callback()
    },500)
}

walkDog(()=>{
    cleanKitchen(()=>{
        tashOut(()=>{
            console.log("all work done");
            
        })
    })
})