const userService = require('./Service');

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    await userService.registerUser(username, password, email);
    res.status(201).json({ message: 'Đăng ký thành công' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    await userService.loginUser(username, password);
    res.status(200).json({ message: 'Đăng nhập thành công' });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'Không tìm thấy người dùng' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, name, email, bio, website, phone, gender } = req.body;

  try {
    const updatedUser = await userService.updateUserById(id, {
      username,
      name,
      email,
      bio,
      website,
      phone,
      gender,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { register, login, getUserById, updateUser };
