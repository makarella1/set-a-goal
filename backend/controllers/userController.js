import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/userModel.js';

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({ _id: user.id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

  res.json({ message: 'register user' });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'login user' });
});

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'display user data' });
});

export default {
  registerUser,
  loginUser,
  getMe,
};
