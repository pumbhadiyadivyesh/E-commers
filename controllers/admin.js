const admin = require('../model/signupadmin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.SECURE = async function(req, res, next) {
  try {
    const token = req.headers.authorization
    if (!token) {
      throw new Error('Attach Token')
    }
    const tokenData = jwt.verify(token,'divyesh')
    console.log(tokenData.id);
    const checkuser = await admin.findById(tokenData.id)
    if (!checkuser) {
      throw new Error('User Not Found')
    }
    next()
  } catch (error) {
    res.status(404).json({
      message:error.message
    })    
  }
}

exports.signadmin = async function(req, res, next) {
    try {
      const signup = req.body
      if (!signup.name || !signup.email || !signup.password) {
        throw new Error('filed all data')
      }
      signup.password =await bcrypt.hash(signup.password,10)
      const data = await admin.create(signup)
      const token = jwt.sign({id:data._id},'divyesh')
      res.status(200).json({
        message:"signup sucesses",
        data,
        token
      })
      
    } catch (error) {
      res.status(404).json({
        message:error.message
      })    
    }
  }

  exports.loginadmin = async function(req, res, next) {
 
    try {
      const logindata = req.body
      if (!logindata.email || !logindata.password) {
        throw new Error("please add data")
      }
      const checkuser = await admin.findOne({email:logindata.email})
      if (!checkuser) {
        throw new Error("email not match")
      }
      const checkpass = await bcrypt.compare(logindata.password,checkuser.password)
      if (!checkpass) {
        throw new Error("check password")
      }
      const token = jwt.sign({id:checkuser._id},'divyesh')
      res.status(200).json({
        message:"login sucsses",
        checkuser,
        token
      })
    } catch (error) {
      
      res.status(404).json({
        message:error.message
      })
    }
  }