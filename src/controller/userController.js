const User = require("../models/User");

const getUserConroller = async (req, res) => {
  try {
    const users =await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};
const addUserConroller = async (req, res) => {
  try {
    let user = new User(req.body);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUserConroller = async (req, res) => {
   try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
   } catch (error) {
    res.status(500).json({ message: error.message });
   }
};
const deleteUserConroller = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({message:`Kullanıcı silindi`,deletedUser});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserConroller,
  addUserConroller,
  updateUserConroller,
  deleteUserConroller,
};

