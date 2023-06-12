const express = require("express");
const router = express.Router();
const userController = require("../../components_Trieu/user/UserController");

router.post("/update/:id", userController.updateUser);

//login user
router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const result = await userController.login(username, password);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: error.message });
  }
});
//register user
router.post("/register", async function (req, res, next) {
  try {
    const { username, password, email } = req.body;
    const result = await userController.register(username, password, email);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: error.message });
  }
});

//get user
router.get("/get/:id", async function (req, res, next) {
  try {
    const { id} = req.params;
    const result = await userController.getUserById(id);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: error.message });
  }
});
//update user
router.post("/update/:id", async function (req, res, next) {
    try {
      const { id } = req.params;
      const { username, name, email, bio, website, phone, gender } = req.body;
      const result = await userController.updateUser(id,username, name, email, bio, website, phone, gender);
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ result: error.message });
    }
  });
  
module.exports = router;
