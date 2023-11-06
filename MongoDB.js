const mongoose = require('mongoose');

// Define the MongoDB schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  // Add other user-related fields as needed
});

const flightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  // Add other flight-related fields as needed
});

// Define models
const User = mongoose.model('User', userSchema);
const Flight = mongoose.model('Flight', flightSchema);
