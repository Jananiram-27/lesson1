async function asAw(){
   var a=15;
    setTimeout(function(){
        console.log("hello")
    },5000)
    console.log(a);
}
asAw().then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(res);
})
console.log(asAw());

//insta example
likecode=()=>{
    return new Promise((likepost)=>{
        setTimeout(()=>{
          likepost("liked your post");
        },5000);
    })
}
function postCode(){
var post=new Promise((createpost)=>{
    setTimeout(()=>{

        createpost("post created successfully");
    },5000);
}).then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res);
})
}
postCode();
likecode().then((res)=>{
    console.log(res);
})
