const user = require("../model/signupuser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.SECURE = async function(req, res, next) {
  try {
    const token = req.headers.authorization
    if (!token) {
      throw new Error('Attach Token')
    }
    const tokenData = jwt.verify(token,'divyesh')
    console.log(tokenData.id);
    const checkuser = await user.findById(tokenData.id)
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

exports.usersign = async function (req, res, next) {
  try {
    const singup = req.body;
    if (!singup.name || !singup.email || !singup.password) {
      throw new Error("Enter All Data");
    }
    singup.password = await bcrypt.hash(singup.password, 10);
    const data = await user.create(singup);
    const token = jwt.sign({ id: data._id }, "divyesh");
    res.status(200).json({
      message: "signup success",
      data,
      token,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.userlogin = async function (req, res, next) {
  try {
    const login = req.body;
    if (!login.email || !login.password) {
      throw new Error("Enter All Data");
    }
    const checkseller = await user.findOne({ email: login.email });
    if (!checkseller) {
      throw new Error("Please Eneter Emial")
    }
    const checksellerpas = await bcrypt.compare( login.password,checkseller.password)
    if (!checksellerpas) {
      throw new Error("Checck Password");
    }
    const token = jwt.sign({ id: checksellerpas._id }, "divyesh");
    res.status(200).json({
      message: "Login success",
      checkseller,
      token,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
