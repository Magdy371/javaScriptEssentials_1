const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
// Middleware to parse JSON body
app.use(express.json());
app.post('/login', (req, res) => {
    const { userName, password } = req.body;
    if (userName === 'admin' && password === 'password') {
        const token = jwt.sign({ name: 'admin' }, 'secret-key', { expiresIn: '1h' });
        res.json({ token });
    }else {
        res.status(401).send('Invalid credentials');
    }
});
app.get('/profile', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    jwt.verify(token, 'secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }
        res.send(`Welcome ${decoded.name}`);
    });
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});