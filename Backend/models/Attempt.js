const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    UserName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
// Register the "details" model
const Attempt = mongoose.model("details", detailsSchema);
  
module.exports = Attempt;
