const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Student API is running!"
    });
});

app.get("/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Pathum",
            course: "IT"
        },
        {
            id: 2,
            name: "Nimal",
            course: "Computer Science"
        }
    ]);
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});