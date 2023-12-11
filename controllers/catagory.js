const catagory = require('../model/catagory')



exports.Addcatagory = async function(req,res,next){
    try {
       console.log(req.body);
        if (!req.body.name || !req.body.image) {
            throw new Error("Field All Data")
        }
        const data = await catagory.create(req.body)
        res.status(200).json({
            message:"Created!!!",
            data:data
        })
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}
exports.Getcatagory = async function(req,res,next){
    try {
        const data = await catagory.find()
        res.status(200).json({
            message:'All Data find',
            data:data
        })   
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}
exports.Deletcatagory = async function(req,res,next){

    try {
        await catagory.findByIdAndDelete(req.query.id)
        console.log(req.quary.id)
        res.status(200).json({
            message:"Delete Data"
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}
exports.Upadatecatagory = async function(req,res,next){
    try {
        await catagory.findByIdAndUpdate(req.query.id,req.body)
        res.status(200).json({
            message:"Upadated Data"
        })   
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}