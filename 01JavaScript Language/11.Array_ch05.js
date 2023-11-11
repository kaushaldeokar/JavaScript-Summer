let a=[1,"Harry",true,41];
console.log(a.length)
console.log(a[1])
a[1]=34
console.log(a)
console.log(typeof a)
// methods
// 1
console.log(a.toString())
console.log(typeof a.toString())
// 2
console.log(a.join())
// 3
console.log(a.pop())
console.log(a)
// 4
console.log(a.push("Kaushal"))
console.log(a);
// 5
console.log(a.shift());
console.log(a);
// 6
console.log(a.unshift(20));
console.log(a);
// 7
delete a[2];
console.log(a);
// 8
let b=["19","20","21"];
let c=["22","23","24"]
let d=a.concat(b,c);
console.log(d)
// 9
a.sort();
console.log(a);
// 10
let e=[1,2,3,4,7,8];
e.splice(4,0,6,5);
console.log(e);
e.sort();
console.log(e);
// 11

console.log(e.slice(4));
console.log(e.slice(4,7));

