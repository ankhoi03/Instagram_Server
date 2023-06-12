const userService = require('./UserService');

const register = async (username, password, email) => {
  try {
    result=await userService.registerUser(username, password,email);
    return result;
  } catch (error) {
    throw error;
  }
};

const login = async (username,password) => {
  try {
    result=await userService.loginUser(username, password);
    return result;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  
  try {
    const user = await userService.getUserById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id,username, name, email, bio, website, phone, gender ) => {
  try {
    const user = await userService.updateUserById(id, {
      username,
      name,
      email,
      bio,
      website,
      phone,
      gender,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { register, login, getUserById, updateUser };
