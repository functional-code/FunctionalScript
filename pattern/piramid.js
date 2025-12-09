for(let i=0;i<5;i++){
    for(let j=0;j<(5-i);j++){
        process.stdout.write(" ");
    }
    for(let j=0;j<2*i;j++){
        process.stdout.write("*");
    }
    console.log();


}