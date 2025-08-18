const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = "cUJ40027$#@g";

const myApp = express();
myApp.use(express.json());

myApp.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (username === 'magdy' && password === 'Artile@%$') {
        const token = jsonwebtoken.sign({ user: "magdy" }, JWT_SECRET);
        return res.json({ token });
    }
    return res.status(401).json({ message: "Unauthorized user credentials" });
});




myApp.get('/employees', (req, res) => {
  try {
    const tkn = req.header('Authorization');
    if (!tkn) {
      return res.status(401).send("No Token received");
    }

    let tokenValue;
    if (tkn.startsWith('Bearer ')) {
      tokenValue = tkn.slice(7).trim();
    } else {
      return res.status(401).json({ message: "Invalid token format. Try logging in again." });
    }

    const verificationStatus = jsonwebtoken.verify(tokenValue, JWT_SECRET);
    return res.json({ message: `Welcome ${verificationStatus.user}` });

  } catch (error) {
    return res.status(401).json({ message: "Failed to authorize. Please login again later." });
  }
});
const port = 3000;
myApp.listen(port,()=>{console.log(`server started on port ${port}`)});