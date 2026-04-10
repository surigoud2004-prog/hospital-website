const express = require('express');
const path = require('path');
const app = express();

// Allows your HTML file to connect
app.use(express.json());
app.use(express.static(path.join(__dirname,'dist')));

const ADMIN_PASSWORD = "admin123"; // This is now hidden from the user

app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        res.status(200).send({ success: true });
    } else {
        res.status(401).send({ success: false, message: "Invalid Password" });
    }
});

app.get('*any',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist','index.html'))
})
// At the bottom of server.js
const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});