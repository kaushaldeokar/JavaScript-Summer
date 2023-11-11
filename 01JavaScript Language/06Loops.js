const prompt = require('prompt-sync')();
const alert=require('alert'); 
//let n=prompt("Enter n");
//for(let i=0;i<n;i++)console.log(i);
//alert("hi");


const obj={
    //kaushal:"22",
    ayushi:"21",
    astha:"22",
    manymore:"34"
}

for(let a in obj){
    console.log("Kaushal History "+a);
}
//condtion obj type must be iterable ex array or string
for(let a of "Kaushal"){
    console.log(a);
}
