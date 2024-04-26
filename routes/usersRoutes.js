const express = require('express');
const userController = require('../controllers/usersController.js');

const userRouter = express.Router();

userRouter.route('/')
.get(userController.getUser)
.post(userController.addUser)

userRouter.route('/:id')
.put(userController.replaceUser)
.delete(userController.deleteUser)

module.exports = userRouter;

