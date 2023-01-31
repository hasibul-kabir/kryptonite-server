const express = require('express');
const registration = require('../controllers/registration');
const userRouter = express.Router();

userRouter.post('/signup', registration);

module.exports = userRouter;