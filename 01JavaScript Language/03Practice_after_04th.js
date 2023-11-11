//Q1
let str="Kaushal";
let k=7;
// str+=k;
// console.log(str);
console.log(str+k);

//Q2
console.log(typeof str);
console.log(typeof (str+k));

//Q3

const item={
    //these are keys
    Kaushal : 22,
    Dhruv:21,
    me:30
}
console.log(item);
// cannot change to hold a number data type later
//item =24;

//Q4
// add krte time double quote required
item["friend"]="Daksh";
item["name"]="KD";
console.log(item);

//Q5
// Jab Bhi Modify ya print use double quote
const dict={
    apple:"Seb",
    Mango:"AAm",
    Grape:"Angur"
}
console.log(dict);
console.log(dict["apple"]);
