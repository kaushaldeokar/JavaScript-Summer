
// res and err (resolve and reject are provied by javascript itself)
// let promise =new Promise((res,err)=>{
//     console.log("hello from promise");
//     res(56);
// })

// console.log("Hello1");
// setTimeout(()=>{
//     console.log("Hello2");
//     //asynchronous kahi back ground me chal rahi thi//
// },3000)
// console.log("hello3");
// console.log(promise);

// let p1=new Promise((resolve,reject)=>{
//     console.log("promise is pending");
//     setTimeout(()=>{
//         console.log("promise is fullfilled");
//         resolve(true);
//     },3000)
// })

// let p2=new Promise((resolve,reject)=>{
//     console.log("promise is pending");
//     setTimeout(()=>{
//         console.log("promise if rejected");
//         // resolve(true);
//         reject(new Error("here is new Error"));
//     },3000)
// })
// console.log(p1,p2);

// setTimeout(()=>{
//     console.log(p1,p2);
// },6000)


let p1=new Promise((resolve,reject)=>{
    console.log("promise is pending");
    setTimeout(()=>{
        // resolve(56);
        reject(new Error("my Made error"));
    },2000)
})
p1.then((value)=>{
    console.log(value);
    console.log(p1)
}).catch((error)=>{
    console.log("Error is founded and Handled ",error);
    console.log(p1)
})