const cart = require('../model/cart')

exports.Addcart = async function (req, res, next) {
    try {
        if (!req.body.catagory) {
            throw new Error('Please Eneter Catagory')
        }
        const data = await cart.create(req.body)
        res.status(200).json({
            message: "cartlist Created",
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
exports.Getcart = async function (req, res, next) {
    try {
        const data = await cart.find(req, body).populate('catagory')
        res.status(202).json({
            message: "All Data Find",
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
exports.Deletcart = async function (req, res, next) {
    try {

        await cartlist.findByIdAndDelete(req.quary.id)
        console.log(req,quary.id);
        res.status(200).json({
            message: "Delete Data"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
exports.Updatecart = async function(req,res,next){
    try {
        await cartlist.findByIdAndUpdate(req.quary.body ,req.body)
        res.status(200).json({
            message:"Data Updated",
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}