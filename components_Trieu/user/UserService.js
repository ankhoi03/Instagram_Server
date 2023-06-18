const User = require("./UserModel");

const registerUser = async (username,name, password, email) => {
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      const user = new User({
        username,
        password,
        email,
        name,
        image:'https://firebasestorage.googleapis.com/v0/b/project01-429a7.appspot.com/o/instagram%2Fprofile2.jpg_2023-6-13%2013%3A25%3A34?alt=media&token=098fe518-2473-4dd2-bc37-e8ced410c203',
        bio:'',
        website:'',
        phone:'',
        gender:'',
        postSaved:[],
        followers:[],
        following:[]

      });
      await user.save();
      return true;
    } else {
      return "User already exists!!!";
    }
  } catch (e) {
    console.log(">>>>>>Register Error:", error);
  }
  return false;
};

const loginUser = async (username, password) => {
  try {
    let user = await User.findOne({ username });
    if (user) {
      check= user.password == password;
     return check ? user : false; 
    }
    return false;
  } catch (error) {
    console.log(">>>>>>Login Error:", error);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (user) {
      return user;
    }
  } catch (error) {
    console.log(">>>>>>Get user  Error:", error);
  }
  return [];
};

const updateUserById = async (id, userData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });
    if (updatedUser) {
    return updatedUser;
    }
  } catch (error) {
    console.log(">>>>>>Update user  Error:", error);
  }
  return [];
};

module.exports = { registerUser, loginUser, getUserById, updateUserById };
