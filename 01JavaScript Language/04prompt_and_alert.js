const prompt = require('prompt-sync')();
const alert=require('alert'); 
let a=prompt("Hey Enter!?")
//number entered will be by defalut of string type
console.log(a);
console.log(typeof a);
// a=Number(a);
a=Number.parseInt(a);
console.log(a);
console.log(typeof a);

if(a>10){
    alert("good to go");
}else alert("bad to go");
