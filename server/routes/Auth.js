var express = require('express');
var router = express.Router();
var userAuthentication=require('../controller/authController');


/* GET home page. */
router.post('/signup',userAuthentication.Signup,err=>{
  console.log('error while signup user')
})
router.post('/signin',userAuthentication.Signin,err=>{
  console.log('error while signup user')
})
router.post('/result',userAuthentication.Result,err=>{
  console.log('error while signup user')
})
router.post('/register',userAuthentication.Register,err=>{
  console.log('error while signup user')
})
router.get('/all-users',userAuthentication.getUSers,err=>{
  console.log('error while signup user')
})


module.exports=router