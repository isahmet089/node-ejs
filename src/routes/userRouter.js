const express = require('express');
const { addUserConroller, getUserConroller, updateUserConroller,deleteUserConroller} = require('../controller/userController');
const router = express.Router();

router.get("/getuser",getUserConroller);
router.post("/adduser",addUserConroller);
router.put("/updateuser",updateUserConroller);
router.delete("/deleteuser",deleteUserConroller);

module.exports = router;