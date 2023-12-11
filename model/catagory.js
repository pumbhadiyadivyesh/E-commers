const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catagoryuser = new Schema({
    name:String,
    image:String,
})
const catagory = mongoose.model('catagory',catagoryuser)
module.exports = catagory