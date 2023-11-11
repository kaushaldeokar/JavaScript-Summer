const prompt = require('prompt-sync')();
const alert=require('alert'); 

let a=prompt("enter Driver age");
a=Number(a);
(a>=18)?alert("can Drive"):alert("Fined");