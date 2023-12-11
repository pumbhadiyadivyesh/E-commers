const mongoose = require('mongoose')
const Schema = mongoose.Schema

const whistdata = new Schema({
    catagory:{
        type:Schema.Types.ObjectId,
        ref:'product'
    }
})
const whistlist = mongoose.model('whistlist',whistdata)
module.exports = whistlist