function makesandwich()
{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
           let butter=true;
           if(butter)
           {
            resolve("sandwich senji tharan");
           }
           else{
            reject("mudiyathu po");
           }
           
      },2000);
    });
}

async function getsandwich(){
   console.log("sandwich venum");
   makesandwich()
    .then((res)=>{
          console.log(res);
    })
    .catch((res)=>{
        console.log(res);
    })
};
console.log("kidaikura varaikum na vera velai pakuran")
getsandwich();