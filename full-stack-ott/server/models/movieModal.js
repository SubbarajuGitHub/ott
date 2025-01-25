
const { connectDB, db } = require('../services/config.js');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
connectDB()

// Basic CRUD routes
app.get('/movies', async (req, res) => {
    try {
        const users = await db.collection('movies').find({}).toArray();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

