const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/agms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// User CRUD Endpoints
app.post('/users', (req, res) => {
  // Create a new user (POST request)
  // TODO: Implement user creation
});

app.get('/users/:id', (req, res) => {
  // Get user by ID (GET request)
  // TODO: Implement user retrieval
});

app.put('/users/:id', (req, res) => {
  // Update user by ID (PUT request)
  // TODO: Implement user update
});

app.delete('/users/:id', (req, res) => {
  // Delete user by ID (DELETE request)
  // TODO: Implement user deletion
});

// Login Endpoint
app.post('/login', (req, res) => {
  // User login (POST request)
  // TODO: Implement user authentication and generate a token
});

// TODO: Create other endpoints for flights, bookings, and more

app.listen(port, () => {
  console.log(`AGMS API is running on port ${port}`);
});
