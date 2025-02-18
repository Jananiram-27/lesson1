function makesandwich()
{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
           let butter=true;
           if(butter)
           {
            resolve("sandwich is available");
           }
           else{
            reject("not available");
           }
           
      },2000);
    });
}

async function getsandwich(){
   console.log("i want sandwich");
   makesandwich()
    .then((res)=>{
          console.log(res);
    })
    .catch((res)=>{
        console.log(res);
    })
};
console.log("i can play in mean time")
getsandwich();