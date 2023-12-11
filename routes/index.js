var express = require('express');
const admincontro = require('../controllers/admin')
const sellercontrollers = require('../controllers/saller')
const usercontrollres = require('../controllers/user')
const catagorycontrollers = require('../controllers/catagory')
const productcontrollers = require('../controllers/product')
const whistconrollers = require('../controllers/whistlist')
const cartcontrollers = require('../controllers/cart')

var router = express.Router(); 

//Admin Singup And login

router.post('/singupadmin',admincontro.signadmin);
router.post('/loginadmin',admincontro.loginadmin);

// Catagory
router.post('/catagory',admincontro.SECURE,catagorycontrollers.Addcatagory)
router.get('/catagory',catagorycontrollers.Getcatagory)
router.delete('/catagory',catagorycontrollers.Deletcatagory)
router.put('/catagory',catagorycontrollers.Upadatecatagory)

// Product
 router.post('/product',sellercontrollers.SECURE,productcontrollers.Addproduct)
 router.get('/product',productcontrollers.GetProduct)
 router.delete('/product',productcontrollers.DeleteProduct)
 router.put('/product',productcontrollers.Updateproduct)

// whistlist
router.post('/whistlsit',usercontrollres.SECURE,whistconrollers.Addwhist)
router.get('/whistlsit',whistconrollers.Getwhist)
router.delete('/whistlsit',whistconrollers.Deletwhist)
router.put('/whistlsit',whistconrollers.Updatewhist)

//cart
router.post('/cart',usercontrollres.SECURE,cartcontrollers.Addcart)
router.get('/cart',cartcontrollers.Getcart)
router.delete('/cart',cartcontrollers.Deletcart)
router.put('/cart',cartcontrollers.Updatecart)

//User singup And Login
router.post("/singupuser",usercontrollres.usersign);
router.post('/loginuser',usercontrollres.userlogin);

//Seller sign And Login
router.post('/signupseller',sellercontrollers.sellersign);
router.post('/loginseler',sellercontrollers.sellerlogin);

module.exports = router;
