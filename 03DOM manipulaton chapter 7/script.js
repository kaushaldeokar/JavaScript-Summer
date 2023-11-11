// let a=document.getElementsByClassName("card-title");
// console.log(a[0]);
// a[0].style.color="red";
// 2
// let a=document.body.firstElementChild;
// // console.log(a);
// let b=a.firstElementChild;
// // console.log(b);
// let c=b.lastElementChild;
// // console.log(c);
// let d=c.firstElementChild;
// // console.log(d);
// d.style.color="yellow";
// 3
//callbacks//
const loadScript=(url,callback)=>{
    let script=document.createElement('script');
    script.src=url;
    document.body.appendChild(script);
}