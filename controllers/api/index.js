const bcrypt = require('bcrypt');
const router = require('express').Router();
const { Book, User } = require('../../models');

/** POST Requests to /api/login */
router.post('/login', async (req, res) => {
  try {
    // If we don't have a username and password - Return a 4xx error
    if (!req.body.username || !req.body.password) {
      throw new Error('Missing user credentials');
    }
    // We should check for the user in the DB by the username
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    console.log('🚀 ~ file: index.js:17 ~ router.post ~ user:', userData);

    // If they don't exist - Return a 4xx error
    if (!userData) {
      return res.status(404).json({ message: 'Invalid User Credentials' });
    }
    // If they do exist, get the password and use bcrypt to compare
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      userData.password,
    );

    // If it doesn't match -- Return a 4xx error
    if (!isValidPassword) {
      return res.status(404).json({ message: 'Invalid User Credentials' });
    }

    return res.status(200).json({ userData });
    // If it does match, return a 2xx status
  } catch (error) {
    // If there is an error -- Return a 5xx status
    console.error(`🚨${error.message}🚨`);
    return res.status(500).json({ message: 'Server Error' });
  }
});

/** GET Requests to /api/users */
router.get('/users', async (req, res) => {
  const userData = await User.findAll({ include: Book });
  return res.json(userData);
});

/** POST Requests to /api/users */
router.post('/users', async (req, res) => {
  const userData = await User.create({ ...req.body });
  return res.json(userData);
});

/** GET Requests to /api/books */
router.get('/books', async (req, res) => {
  const userData = await Book.findAll({ include: User });
  return res.json(userData);
});

/** POST Requests to /api/users */
router.post('/books', async (req, res) => {
  const userData = await Book.create({ ...req.body });
  return res.json(userData);
});

module.exports = router;
