// const jwt = require("jsonwebtoken");
// const AppConstants = require("../Constants/AppConstants");

// const authenWeb = (req, res, next) => {
//   const { session } = req;
//   const url = req.originalUrl.toLowerCase();
//   if (!session) {
//     // nếu chưa login
//     if (url.includes("login")) {
//       return next();
//     } else {
//       return res.redirect("/login");
//     }
//   } else {
//     const { token } = session;
//     if (!token) {
//       if (url.includes("login")) {
//         return next();
//       } else {
//         return res.redirect("/login");
//       }
//     } else {
//       jwt.verify(token, "secret", function (error, decoded) {
//         if (error) {
//           if (url.includes("login")) {
//             return next();
//           } else {
//             return res.redirect("/login");
//           }
//         } else {
//           const { role } = decoded;
//           if (role < AppConstants.ROLES.ADMIN) {
//             req.session.destroy(); // nếu không phải admin thì logout
//             return res.redirect("/login");
//           } else {
//             // nếu đã login
//             if (url.includes("login")) {
//               // qua hom
//               return res.redirect("/");
//             } else {
//               return next();
//             }
//           }
//         }
//       });
//     }
//   }
// };
// const authenAPI = async (req, res, next) => {
//   let token = null;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] == "Bearer"
//   )
//     token = req.headers.authorization.split(" ")[1];

//   if (token) {
//     jwt.verify(token, "secret", function (error, decoded) {
//       if (error) {
//         return res.status(401).json({ status: false });
//       } else {
//         return next();
//       }
//     });
//   } else {
//     return res.status(401).json({ status: false });
//   }
// };

// module.exports = { authenWeb, authenAPI };
