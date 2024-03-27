/** Imports */
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
/** Configuration */
const PORT = process.env.PORT || 3001;

/** Express Configuration */
const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/** Routes */
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(PORT, () => console.log('App is running!'));
