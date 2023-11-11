let p=fetch("https://jsonplaceholder.typicode.com/posts/1");
p.then((res)=>{
    console.log(res.status);
    console.log(res.ok);
    console.log(res.headers);
    return res.json();
}).then((res)=>{
    console.log(res);
})
// }))fetch("https://jsonplaceholder.typicode.com/posts",[options]);
// without options a get request is passed//
// options is ans object that contains request headers

