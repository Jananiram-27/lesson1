const mdb = require('mongoose')

const signupSchema = new mdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    passWord:String,
    phoneNumber:Number
})
const signup = mdb.model("signup",signupSchema)
module.exports = signup;