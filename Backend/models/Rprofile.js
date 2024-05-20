// models/rprofile.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const rProfileSchema = new Schema({
  recruiter:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Recruiter',
    required : true,
    unique :true,
  },
  companyName: {
    type: String,
    required: true,
  },
  // companyUsername: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  companyHistory: {
    type: String,
    required: true,
  },
  companyDetails: {
    type: String,
    required: true,
  },
  foundersDetails: {
    type: String,
    required: true,
  },
});

const RProfile = mongoose.model('RProfile', rProfileSchema);

module.exports = RProfile;
