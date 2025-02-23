const express = require('express');
const { addUserConroller, getUserConroller, updateUserConroller,deleteUserConroller} = require('../controller/userController');
const router = express.Router();

router.get("/",getUserConroller);
router.post("/",addUserConroller);
router.put("/:id",updateUserConroller);
router.delete("/:id",deleteUserConroller);

module.exports = router;