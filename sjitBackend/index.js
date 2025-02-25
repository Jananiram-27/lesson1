const express = require('express')
const mdb = require('mongoose')
const dotenv = require('dotenv')
const Signup = require('./models/signupSchema')
const app = express()
app.use(express.json())
const PORT = 3001;
dotenv.config();


mdb.connect("mongodb+srv://Janani:TLcebSLMJXxJWIwM@popbackend.w3wwc.mongodb.net/SJIT_DB").then(()=>{console.log("MDB Connection successful");}).catch((err)=>{console.log("Check your connection String", err);})



//app.post("/signup",(req,res)=>{

//})



app.post("/signup",(req,res)=>{
    try{
     console.log(req.body)
    const {firstName,lastName,email,passWord,phoneNumber}= req.body
    const newSignup = new Signup({
        firstName:"Janani",
        lastName:"R",
        email:"hello@gmail.com",
        passWord:"sjit",
        phoneNumber:987654321,
      
        
    });
    newSignup.save()
    console.log("Signup Successful");
    ({ message: "Signup Successful", isSignUp: true});
   
}
catch(error){
console.log(error)
res.status(201).json({message:"Signup Successful",isSignUp:true})

}
   
})
app.get("/", (req,res) =>{
    res.sendFile("C:\\Users\\janani.VIVOVIVO\\Desktop\\mern\\index.html");
   
})

app.listen(PORT,()=>console.log("Server started successfully"));