const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const Sellerschema = new Schema({
    name:String,
    email:String,
    password:String,
})

const seller = mongoose.model('signupsaller',Sellerschema)
module.exports = seller

