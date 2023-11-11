// https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js


const LoadScript=(src)=>{
    return new Promise((res,rej)=>{
        let s=document.createElement("script");
        let container=document.body;
        s.src=src;
        s.onload=(()=>{
            res(101);
            // why not here
            // container.appendChild(s);
        })
        s.onerror=(()=>{
            rej(new Error("link is broken"));
        })

        container.appendChild(s);
        
    })
}
let p=LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
p.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})
