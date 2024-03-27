const router = require('express').Router();
const { User } = require('../../models');

/** GET Requests to /api/users */
router.get('/users', async (req, res) => {
  const userData = await User.findAll({});
  return res.json(userData);
});

/** POST Requests to /api/users */
router.post('/users', async (req, res) => {
  const userData = await User.create({ ...req.body });
  return res.json(userData);
});

module.exports = router;
