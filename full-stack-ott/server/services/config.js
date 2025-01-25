// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Your MongoDB connection string
const uri = "mongodb+srv://prathyushab1111:3ElG8u8uQXiZqcIe@cluster0.orxtk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
}

const db = client.db("sample_mflix")

module.exports = { connectDB, db };



