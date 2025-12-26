
function selector(a, element){
    if(a<0.2){
        element.style.backgroundColor ="green"
    }
    else if(a>0.2 && a<0.4){
        element.style.backgroundColor ="black"
    }
    else if(a>0.4 && a<0.6){
        element.style.backgroundColor ="blue"
    }
    else if(a>0.6 && a<0.8){
        element.style.backgroundColor ="grey"
    }
    else if(a>0.8 && a<1){
        element.style.backgroundColor ="red"
    }
}


document.querySelectorAll(".box").forEach(element => {
    x = Math.random();
    // 
    selector(x,element)
});



