const express = require('express')

const app = express()
app.get("/", (req,res) =>{
    res.sendFile("C:\\Users\\janani.VIVOVIVO\\Desktop\\mern\\index.html");
})

const PORT = 3001

app.listen(PORT,()=>console.log("Server started successfully"));