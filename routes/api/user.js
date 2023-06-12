const express = require("express");
const router = express.Router();
const userController = require("../../components/user/Controller");
// Đăng ký người dùng
// router.post('/register', userController.registerUser);

// // Đăng nhập người dùng
// router.post('/login', userController.loginUser);
router.post("/register", userController.register);
router.post("/login", userController.login);
// router.post('/users', userController.saveUser);
router.post("/update/:id", userController.updateUser);
router.get("/getID/:id", userController.getUserById);
// router.post('/forgot-password', userController.forgotPassword);
module.exports = router;

// Đăng ký tài khoản
////http://localhost:3000/api/user/register
// Đăng nhập
//http://localhost:3000/api/user/login
// lấy thông tin theo id
//http://localhost:3000/api/user/getID/
// Update profile
//http://localhost:3000/api/user/
//mail:ytfubvqdhpnbutwc
