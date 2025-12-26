function addCard(title,description,vCount,mCount,duration,link){
    document.querySelector(".title").insertAdjacentText("afterbegin",title);
    document.querySelector(".description").insertAdjacentText("afterbegin",description);
    document.querySelector(".vCount").insertAdjacentText("afterbegin",vCalculator(vCount));
    document.querySelector(".mCount").insertAdjacentText("beforeend",mCount+" months");
    document.querySelector(".duration").insertAdjacentText("beforeend",duration);
    document.querySelector(".imm").setAttribute("src",link)
}

function vCalculator(vCount){
    if(vCount>999 && vCount<999999){
        return vCount/1000+ "k";
    }
    else if(vCount>999999 ){
        return vCount/1000000+"M";
    }
    else{
        return vCount;
    }
}
addCard("thhis is nest","this is the boos e",868726,6,"34:21","https://i.ytimg.com/an_webp/mCx5aSEK8YE/mqdefault_6s.webp?du=3000&sqp=CLKSu8oG&rs=AOn4CLBMXT2YRwAYg_7Dc_7mlD2hnxndFQ");
