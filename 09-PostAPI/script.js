let CreateTodo=async()=>{
// to use post options we need to  use post options//
let options={
    method: 'POST',
    //JSON.stringify converts Javascript object to string//
    body: JSON.stringify({
      title: 'title',
      body: 'api ka body item',
      userId: 69,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }

  console.log("post Started..");
//   agar options ka use nahi krte toh woh data milta jo phlese present h
let p= await fetch('https://jsonplaceholder.typicode.com/posts/',options)
// but options use to post toh woh data mila jo humne post kiya
let res=p.json();
return res;

}

let getTodo=async()=>{
    // to use post options we need to  use post options//
    
    
      console.log("fetch Started..");
    //   agar options ka use nahi krte toh woh data milta jo phlese present h
    let p= await fetch('https://jsonplaceholder.typicode.com/posts/')
    // but options use to post toh woh data mila jo humne post kiya
    let res=p.json();
    return res;
    
    }




let main=async()=>{
    let data=await CreateTodo();
    console.log("posted !!!");
    console.log(data);

    let dataGet=await getTodo();
    console.log("get data");
    console.log(dataGet);
}

main();
