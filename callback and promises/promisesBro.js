// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// const { promises } = require("jsdom/lib/jsdom/living/helpers/http-request")

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
    return new Promise((resolve, reject) => {
        const isDog = false;
        if(isDog){
        setTimeout(() => {
            resolve("he walked");

        }, 1500)
    }
    else{
        reject(console.log("his not walking"))
        
    }
    })
}
function cleanKit() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("its cleaned");

        }, 1500)
    })
}
function tashOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("its out");

        }, 1500)
    })
}

walkDog().then(value => {
    console.log(value);
    return cleanKit().then(value => {
        console.log(value);
        return tashOut().then(value => {
            console.log(value); console.log("all done").catch(console.log("falied")
            )
            

        })
    })
})
.catch(error=>{console.error(error)
})