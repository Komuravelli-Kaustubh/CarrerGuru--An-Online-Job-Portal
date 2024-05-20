// Assuming you have installed and imported necessary modules (express, mongoose, etc.)

const mongoose = require('mongoose'); 

// Define the data schema for the job posting
const jobSchema = new mongoose.Schema({
  recruiter:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Recruiter',
    // required : true
  },
    companyName: {
      type: String,
      required: true,
    },
    postName: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    jobTiming: {
      type: String,
      enum: ['Full time', 'Freelancer', 'Part time', 'Internship', 'Temporary'],
      required: true,
    },
    levelOfRequirement: {
      type: String,
      enum: ['Urgent', 'Non Urgent'],
      required: true,
    },
    datePosted: {
      type: Date,
      // required: true,
    },
    offeredSalary: {
      type: String,
      required: true,
    },
    expiration: {
      type: Date,
      // required: true,
    },
    genderRequirement: {
      type: String,
      required: true,
    },
    qualificationRequired: {
      type: String,
      required: true,
    },
    companyLink: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    }
  });
  
  // Create a mongoose model using the schema
  const Job = mongoose.model('Job', jobSchema);

  module.exports=Job;