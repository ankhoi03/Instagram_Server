const bcrypt = require('bcryptjs');
const User = require('./Model');

const registerUser = async (username, password, email) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('Tên người dùng đã tồn tại');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    password: hashedPassword,
    email
  });

  await user.save();
};

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Tên người dùng hoặc mật khẩu không chính xác');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error('Tên người dùng hoặc mật khẩu không chính xác');
  }
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const updateUserById = async (id, userData) => {
  const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });
  if (!updatedUser) {
    throw new Error('Failed to update user');
  }
  return updatedUser;
};

module.exports = { registerUser, loginUser, getUserById, updateUserById };
