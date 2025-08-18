const express = require('express');
const session = require('express-session');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Middleware to setup session management
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set to true if using HTTPS
}));

app.post('/login', (req, res) => {
  const { userName, password } = req.body;

  if (userName === 'admin' && password === 'password') {
    req.session.user = { name: 'admin' };
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/profile', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user.name}`);
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});