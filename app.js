var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var miscRoutes = require('./routes/miscRoutes');
var usersRouter = require('./routes/userRoutes');
var errorHandler = require('./utilities/errorHandler');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', miscRoutes);
app.use('/:userId', usersRouter);

// error handler
app.use(errorHandler);

module.exports = app;
