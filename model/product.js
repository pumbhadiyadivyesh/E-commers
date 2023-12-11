const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const productdata = new Schema({
    title: String,
    discription: String,
    price: String,
    discountPercentage: String,
    rating: String,
    stock: String,
    brand: String,
    thumbnail: String,
    images: [String],
    category: {
        type: Schema.Types.ObjectId,
        ref:"category"
    },
})

const product = mongoose.model('product',productdata)
module.exports = product