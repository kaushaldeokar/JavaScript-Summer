const a=[
  {
    Title:"Kaushal Deokar",
    Age:22,
    class:"A"
  },
  {
    Title:"Dhruv",
    Age:21,
    class:"A"
  }
]
//forEach//
a.forEach((e)=>{
    console.log(e["Title"]);
    console.log(e["Age"]);
    console.log(e["class"]);

})

//
let b=[1,2,3];
let c=b.map((e)=>{
    return e*e;
})
console.log(b);
console.log(c);

