//미들웨어 세팅
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//라우터 연결
var indexRouter = require('./routes/index');
var startChatRouter = require('./routes/startChat');
var sequelize = require('./models').sequelize;
// 익스프레스 연결
var app = express();

//시퀄라이즈 DB연결

sequelize.sync();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port',process.env.PORT||8001);

//미들웨어 사용 static, dev
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 라우터 이동
app.use('/', indexRouter);
app.use('/chatStart', startChatRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'),() =>{
  console.log(app.get('port'), '번  포트에서 대기 중');
});
module.exports = app;