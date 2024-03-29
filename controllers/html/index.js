const router = require('express').Router();

/** GET Requests to / */
router.get('/', (req, res) => {
  res.render('home');
});

/** GET Requests to /contact */
router.get('/contact', (req, res) => {
  res.render('contact');
});

/** GET Requests to /contact */
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
