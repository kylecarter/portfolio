const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const Bundler = require('parcel-bundler');

const bundler = new Bundler('./src/templates/entry.js');

const adminRouter = require('./routes/admin');
const apiRouter = require('./routes/api');
const indexRouter = require('./routes/index');

const app = express();
app.enable('trust proxy');
app.use(cookieParser());
app.use(bundler.middleware());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter);

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

module.exports = app;
