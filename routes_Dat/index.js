var express = require("express");
var router = express.Router();
const userController = require("../Controller_Dat/User/Controller");

/* GET home page. */
// https://localhost:3000/
// hiển thị trang chủ
router.get("/",  async (req, res, next) => {
  res.render("index");
});
// hiển thị trang login
//localhost:3000/login
router.get("/login",  async (req, res, next) => {
  res.render("User/login");
});
// xữ lí login => nếu thành công chuyển sang trang chủ
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email + " " + password);
    const result = await userController.login(email, password);
    if (result) {
      // khi login thành công
      //tạo token, lưu token vào session
      return res.redirect("/");
    } else {
      return res.redirect("/login");
    }
  } catch (error) {
    console.log("Lỗi rồi kìa :", error);
  }
});
// https://localhost:3000/logout
// xử lý logout
// xóa token trong session
// chuyển sang trang login
router.get("/logout",  function (req, res, next) {
  try {
    req.session.destroy();
    res.redirect("/login");
  } catch (error) {
    console.log("Logout error: " + error);
    return res.redirect("/login");
  }
});

module.exports = router;
