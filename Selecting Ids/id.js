

let boxes = document.getElementsByClassName("box");
console.log(boxes)
boxes[4].style.backgroundColor ="red"

// document.getElementById("target").style.backgroundColor="pink"
// document.querySelector(".box").style.backgroundColor="green"
// document.querySelectorAll(".box").style.backgroundColor="green"

document.querySelectorAll(".box").forEach( e=>{
    e.style.backgroundColor ="green"
})