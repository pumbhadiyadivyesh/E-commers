const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userdata = new Schema({
    name:String,
    email:String,
    password:String,
})

const admin = mongoose.model('signupadmin',userdata)
module.exports = admin


