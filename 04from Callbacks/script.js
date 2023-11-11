// const LoadScript=(url)=>{
//     var script=document.createElement("script");
//     script.src=url;
//     script.onload=(()=>{
//         console.log("Loaded with SRC: ", url);
//     })
//     document.body.appendChild(script);
// }

const LoadScript=(url,callback)=>{
    var script=document.createElement("script");
    script.src=url;
    // script.onload=()=>callback(script);
    //on
    script.onload=(()=>{
        console.log("Loaded with SRC: ", url);
        callback(null,script)
    })
    script.onerror=(()=>{
        console.log("error in loading src with ", url);
        callback(new Error("failed to load src"))
    })
    
    
    document.body.appendChild(script);
}

const getA=(error,script)=>{
    if(error){
        console.log(error);return;
    }
    console.log("Script Added ", script.src);
    alert("Script Added "+ script.src);
}

LoadScript("https://cdn.jsdelivr.kodjdojvnet/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",getA)