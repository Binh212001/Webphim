const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    const checkpass = await bcrypt.compare(password, user.password);
    if (!user) {
      return res.status(400).json({ message: 'username or passord invalid' });
    }
    if (!checkpass)
      return res.status(400).json({ message: 'username or passord invalid' });
    const token = jwt.sign(
      {
        username,
        password,
      },
      'Binh',
    );
    return res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'register err',
    });
  }
};

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const oldUser = await User.findOne({ username });
    if (oldUser)
      return res.status(400).json({
        message: 'Uer have already exit',
      });

    const hashpassWord = await bcrypt.hash(password, 10);
    const newUer = new User({
      username,
      password: hashpassWord,
    });
    const token = jwt.sign(
      {
        username,
        password,
      },
      'Binh',
    );

    await newUer.save();

    return res.json({
      user: newUer,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'register err',
    });
  }
};

module.exports = { login, register };
