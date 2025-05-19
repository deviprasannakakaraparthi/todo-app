const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(cors());                    // Enable CORS
app.use(express.json());           // Parse JSON
app.use('/tasks', taskRoutes);     // Use routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tododb')

