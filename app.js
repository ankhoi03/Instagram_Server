const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");
require("./Controller_Dat/Category/CategoryModel")
require("./Controller_Dat/Status/Model");
require("./Controller_Dat/User/Model");

// thêm ở đây 
const indexRouter = require('./routes_Dat/index');

// CPanel
const userCPanel = require('./routes_Dat/CPanel/users');
const statusCPanel = require('./routes_Dat/CPanel/status');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// khai báo thông tin của session, cookie
app.use(
  session({
    secret: "iloveyou", // khóa
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/SV_Instagram",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    }
  )
  .then(() => console.log(">>>>>>>>>> DB Connected!!!!!!"))
  .catch((err) => console.log(">>>>>>>>> DB Error: ", err));

app.use('/', indexRouter);
app.use('/CPanel/user', userCPanel); // https://localhost:3000/CPanel/user/
app.use('/CPanel/status', statusCPanel); // https://localhost:3000/CPanel/status/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
