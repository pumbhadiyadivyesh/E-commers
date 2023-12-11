const product = require('../model/product')

exports.Addproduct = async function (req,res,next) {
    
    try {
        console.log(req.body);
        if (!req.body.title || !req.body.discription || !req.body.price || !req.body.discountPercentage
            || !req.body.rating || !req.body.stock || !req.body.brand || !req.body.thumbnail || !req.body.images) {
            throw new Error("Please All Field")
        }
        let data = await product.create(req.body)
        res.status(200).json({
            message:"Product Created",
            data
        })
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}

exports.GetProduct = async function (req,res,next) {

    try {
        let data =await product.findById(req.body).populate('catagory')
        res.status(200).json({
            message:"All Data Find",
            data
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}

exports.DeleteProduct = async function(req,res,next){

    try {
        await product.findByIdAndDelete(req.query.id)
        console.log(req.query.id)
        res.status(200).json({
            message:"Delete Poduct"
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

exports.Updateproduct = async function(req,res,next){

    try {
       const data=await product.findByIdAndUpdate(req.query.id , req,body)
        
       res.status(200).json({
            message:"Data Updated",
        })
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}