const User = require("./UserModel");

const registerUser = async (username, password, email) => {
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      const user = new User({
        username,
        password,
        email,
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
      return user.password == password;
    }
    re;
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
