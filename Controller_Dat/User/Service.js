const userModel = require("../User/Model");
const bcrypt = require("bcryptjs");
const AppConstants = require("../../Constants/AppConstants");
// kiểm tra email, password
// kiểm tra email có trong database
// nếu có kiểm tra password
// nếu password đúng trả về thông tin User
// nếu password sai trả về null
const login = async (email, password) => {
  try {
    const user = users.find((item) => item.email == email);
    if (user && user.password == password) {
      return user;
    }
    return null;
    // let user = await userModel.findOne({ email });
    // if (user) {
    //   const isMatch = bcrypt.compareSync(password, user.password);
    //   return isMatch ? user : false;
    // }
  } catch (error) {
    console.log("User service login error: ", error);
  }
  return false;
};

const register = async (email, password, name) => {
  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      await userModel.create({
        email: email,
        password: password,
        name: name,
        role: AppConstants.USER
      });
      return true;
    }
  } catch (error) {
    console.log("User service register error: ", error);
  }
  return false;
};

module.exports = { login, register };

var users = [
  { _id: 1, email: "quocdat@gmail.com", password: 1, name: "Quốc Đạt" },
  
];
