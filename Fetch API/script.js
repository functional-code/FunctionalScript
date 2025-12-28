 const URL = "https://official-joke-api.appspot.com/random_joke";
 let getJoke = document.querySelector(".para");
 let buttonf = document.querySelector(".bpa");
 
    const getArt = async()=>{
      //  console.log("getting data...");
       
    let response = await fetch (URL);
    // console.log(response);
    let data = await response.json();
      getJoke.innerText = data.setup;
    }
   //  getArt();  
    
    buttonf.addEventListener("click", (e)=>{
       getArt();
    }); 