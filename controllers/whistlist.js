const whistlist = require('../model/whistlist')

exports.Addwhist = async function (req, res, next) {
    try {
        if (!req.body.catagory) {
            throw new Error('Please Eneter Catagory')
        }
        const data = await whistlist.create(req.body)
        res.status(200).json({
            message: "Whistlist Created",
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
exports.Getwhist = async function (req, res, next) {
    try {
        const data = await whistlist.find(req, body)
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
exports.Deletwhist = async function (req, res, next) {
    try {

        await whistlist.findByIdAndDelete(req.quary.id)
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
exports.Updatewhist = async function(req,res,next){
    try {
        await whistlist.findByIdAndUpdate(req.quary.body ,req.body)
        res.status(200).json({
            message:"Data Updated",
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}