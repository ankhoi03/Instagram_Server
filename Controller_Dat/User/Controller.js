const userService = require('../User/Service');
const mailer = require('nodemailer');


const login = async (email, password) => {
  try {
    return await userService.login(email, password);
  } catch (error) {
    console.log("User controller login error: ", error);
  }
};
const register = async (email, password, name) => {
  try {
    return await userService.register(email, password, name);
  } catch (error) {
    console.log("User controller register error: ", error);
  }
};
const transporter = mailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: 'quocdatbp11112@gmail.com',
    pass: 'xyuqqmukxfgrsupo'
  },
});
// gửi mail OTP
// http://localhost:3000/api/user/sendmail

const sendMail = async (to, subject, content) => {
  try {
    const mailOptions = {
      from: 'Shawn <bee241019983@gmail.com>',
      to,
      subject,
      html: content
    }
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.log('User controller sendmail error: ', error);
  }
  return false;
}

module.exports = { login, register, sendMail };
