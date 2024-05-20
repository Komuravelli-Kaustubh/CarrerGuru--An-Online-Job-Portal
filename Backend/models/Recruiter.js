const mongoose = require('mongoose');

// Define the schema for the Recruiter model
const recruiterSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields specific to the recruiter model here
  // For example, companyAddress, phone number, etc.
});

// Create the Recruiter model using the schema
const Recruiter = mongoose.model('Recruiter', recruiterSchema);

// Export the model
module.exports = Recruiter;
