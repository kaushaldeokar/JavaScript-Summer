// const kaushal =async()=>{
//     return 5;
// }

// let p=kaushal();
// p.then((x)=>{
//     alert(x);
// })

const kaushal =async()=>{
    let delhiWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Degree")
        },2000)
    })
    let bangloreWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 Degree")
        },7000)
    })
    
    //wait for delhi weater to resolve//
    console.log("Fetching delhi weather....")
    let DelhiW=await delhiWeather;
    console.log("Fetched delhi weather....")
    //wait for Banglore weater to resolve//
    console.log("Fetching Banglore weather....")
    let BangloreW=await bangloreWeather;
    console.log("Fetched Banglore weather....")



    return [DelhiW,BangloreW]; 
}

let a=kaushal();
a.then((x)=>{
    console.log(x);
    alert(x);
    // after 7 seconds
})