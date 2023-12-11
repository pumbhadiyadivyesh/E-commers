const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartdata = new Schema({
    catagory:{
        type:Schema.Types.ObjectId,
        ref:'product'
    }
})
const cart = mongoose.model('cart',cartdata)
module.exports = cart 