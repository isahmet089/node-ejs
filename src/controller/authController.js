const User=require('../models/User');

const loginContoller=async(req,res)=>{
    try {
      let {email,password}=req.body;
      const user = await User.findOne({email});
      console.log(req.body);
      if(!user){
        return res.status(400).json({message:"Kullanıcı bulunamadı"});
      }
      if(password !== user.password){
        return res.status(400).json({message:"Hatalı şifre"});
      }
      res.status(200).send({message:"Giriş başarılı"});
    } catch (error) {
      res.status(500).json({message:error.message});
    }
};

const registerController=async(req,res)=>{
  try {
    let user = new User(req.body);
    const emailCheck = await User.findOne({email:user.email});
    if(emailCheck){
      return res.status(400).json({message:"Email already exists"});
    }
  await user.save();
  res.status(201).json(user);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

module.exports={loginContoller,registerController};