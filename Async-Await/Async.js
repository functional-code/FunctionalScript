// function api(){
//     return new Promise((resolve,rejest)=>{
//         console.log("this is a function succes");
//         setTimeout(()=>{

//         resolve(200);
//         },2000)


//     })
// }

// async function getWeatherData(){
//     await api();//1st
//     await api();//2st
// }

// api().then(value=>{
//     console.log(value)

// })


//aync await
function getData(dataId) {
    console.log("Feching data.......")

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("the data is ", dataId)
            resolve("this is a functional succes");
        }, 3000)
    })
}
async function getAllData() {
    await getData(1).then(value => {
        console.log(value)

    });
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}

//iife
(async function () {
    await getData(1).then(value => {
        console.log(value)

    });
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();

getAllData()



