const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows your HTML file to connect
app.use(express.json());

const ADMIN_PASSWORD = "admin123"; // This is now hidden from the user

app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        res.status(200).send({ success: true });
    } else {
        res.status(401).send({ success: false, message: "Invalid Password" });
    }
});

app.listen(3000, () => console.log('Security server running on http://localhost:3000'));
