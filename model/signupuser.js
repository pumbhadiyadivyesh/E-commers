const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userdata = new Schema({
    name:String,
    email:String,
    password:String,
})

const user = mongoose.model('signupuser',userdata)
module.exports = user

