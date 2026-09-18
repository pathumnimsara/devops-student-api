const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.json());

const PORT = 3001;

// MongoDB connection
const client = new MongoClient(
    process.env.MONGO_URL || "mongodb://mongodb:27017"
);

async function connectDB() {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("studentdb");
    const studentsCollection = db.collection("students");

    // Home route
    app.get("/", (req, res) => {
        res.json({
            message: "Student API is running!"
        });
    });

    // Get students
    app.get("/students", async (req, res) => {
        const students = await studentsCollection.find().toArray();
        res.json(students);
    });

    // Add a student
app.post("/students", async (req, res) => {
    const student = req.body;

    const result = await studentsCollection.insertOne(student);

    res.json({
        message: "Student added successfully",
        id: result.insertedId
    });
});

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

connectDB().catch(console.error);