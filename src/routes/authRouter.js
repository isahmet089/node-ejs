const express = require('express');
const { loginContoller, registerController } = require('../controller/authController');
const router = express.Router();

router.post("/login",loginContoller);
router.post("/register",registerController);

router.get("/logaut",(req,res)=>{
  res.render("logout");
});


router.get("/login",(req,res)=>{
  res.render("loginPage");
});
router.get("/register",(req,res)=>{
  res.render("registerPage");
});

module.exports = router;