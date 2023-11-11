let a=1,b=2,c=3;
//yaha string type return hua
console.log(typeof("sum is "+(a+b+c)));
// no change in type of number
console.log("sum is ",typeof (a+b+c));

//functions are written without parameter let 
//wrong function add(let a,let b)

function add(a,b){
    return a+b;
}
console.log(add(3,4));

const sum=(a,b)=>{
    return a+b;
}
console.log(sum(3,4));
