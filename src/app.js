const express = require('express');
const app = express();
const dotenv = require('dotenv');
const homeRouter = require('./routes/homeRouter.js');
const authRouter = require('./routes/authRouter.js');
const userRouter = require('./routes/userRouter.js');
dotenv.config();


// Set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

// Routes
app.use("/",homeRouter);;
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);




module.exports = app;

