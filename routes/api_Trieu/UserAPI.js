const express = require("express");
const router = express.Router();
const userController = require("../../components_Trieu/user/UserController");
const jwt = require('jsonwebtoken');
const {authenApp}= require('../../middle/Authen');


//login user
router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userController.login(username, password);
    if(user){
      const token=jwt.sign({user}, 'secret', {expiresIn:'2h'});
      return res.status(200).json({ result:true, user, token });
    }
    return res.status(200).json({ result:false, user:null });
  } catch (error) {
    return res.status(400).json({ result: error.message });
  }
});
//register user
router.post("/register", async function (req, res, next) {
  try {
    const { username,name, password, email } = req.body;
    const result = await userController.register(username,name, password, email);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: error.message });
  }
});

//get user
router.get("/get/:id",[authenApp], async function (req, res, next) {
  try {
    const { id} = req.params;
    const user = await userController.getUserById(id);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ result: error.message });
  }
});
//update user
router.post("/update",[authenApp], async function (req, res, next) {
    try {
      const { _id,username, name,image, email, bio, website, phone, gender } = req.body;
      const user = await userController.updateUser(_id,username, name,image, email, bio, website, phone, gender);
      if(user){
        return res.status(200).json({ result:true,user });
      }
      return res.status(200).json({ result:false,user:null });
    } catch (error) {
      return res.status(400).json({ result: error.message });
    }
  });
  
  
module.exports = router;
