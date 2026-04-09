const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Correct name
const correctName = "winwin"; // change this

// Route for form submission
app.post("/check", (req, res) => {
    const userName = req.body.name;

    if (userName.toLowerCase() === correctName.toLowerCase()) {
        res.sendFile(path.join(__dirname, "public", "home.html"));
    } else {
        res.send("<h1>Access Denied ❌</h1><a href='/'>Try Again</a>");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});