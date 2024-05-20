const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const corsOptions = require('./corsOptions');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var fetchuser = require('./middlewear/fetchuser');
const JWT_SECRET = "hdkjvdhdvsjsvdl11246676jnj";
const Profile = require('./models/profile');
const Recruiter = require('./models/Recruiter')
const multer = require('multer');
const Job =require('./models/jobs');
const Rprofile = require('./models/Rprofile');
const attempt = require('./models/Attempt');
const PORT=5001;


app.use(cors(corsOptions));

const url = "mongodb+srv://user1:kmit1@cluster0.7pq8ivp.mongodb.net/Cguru?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection Established"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

// Define the schema for the "details" model
// const detailsSchema = new mongoose.Schema({
//   UserName: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// // Register the "details" model
// const attempt = mongoose.model("details", detailsSchema);

app.post("/post", async (req, res) => {
  console.log(req.body);
  res.send("Hai hai");
});

app.post("/reg", async (req, res) => {
  console.log("I am here");
  const { uname, email, password } = req.body;

  try {
    console.log(uname, '\n');
    console.log(email, '\n');
    console.log(password, '\n');
    await attempt.create({
      UserName: uname,
      email: email,
      password: password,
    });

    // Find the newly registered user
    const user = await attempt.findOne({ email });

    // Generate an authentication token
    const data = {
      user: {
        id: user.id
      }
    };
    const authtoken = jwt.sign(data, JWT_SECRET);

    // Send the authentication token in the response
    res.json({ authtoken,message:"Success" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/signin", async (req, res) => {
  let success = false;
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await attempt.findOne({ email });


    if (!user) {
      success = false;
      return res.status(404).json({ error: "User not found" });
    }
    // console.log("I got it: ", user.email);

    let passwordCompare = () => {
      if (password === user.password) {
        console.log("This is the password we found: ", user.password);
        return true;
      }
      else {
        console.log("We are here!!");
        return false;
      }
    }
    // passwordCompare();

    if (!passwordCompare()) {
      success = false;
      return res.status(401).json({ success, error: "Invalid password" });
    }

    const data = {
      user: {
        id: user.id
      }
    };
    const authtoken = jwt.sign(data, JWT_SECRET);

    // If the sign-in is successful, send the redirect URL in the response
    // const redirectUrl = "/Dashboard"; // Replace with the actual URL of the dashboard or desired page
    success = true;

    res.json({ success, authtoken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
app.post('/getuser', fetchuser, async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await attempt.findById(userId).select("-password")
    res.send(user)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

app.post('/Rgetuser', fetchuser, async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await Recruiter.findById(userId).select("-password")
    res.send(user)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


/// Multer storage configuration to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "C:/Users/Kaust/Desktop/new_ps1/uploads"); // Define the directory where files will be uploaded
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to handle form submission
// Route to handle form submission
// app.post('/makeprofile', upload.fields([{ name: 'profilePicture', maxCount: 1 }, { name: 'cv', maxCount: 1 }]), async (req, res) => {
app.post('/makeprofile',fetchuser, async (req, res) => {

  try {
    const formData = req.body;

    // Validate required fields
    // if (!formData.name || !formData.email || !formData.dateOfBirth || !formData.phoneNumber || !formData.gender || !formData.hobbies || !req.files['profilePicture'] || !req.files['cv']) {
      if (!formData.name || !formData.email || !formData.dateOfBirth || !formData.phoneNumber || !formData.gender) {

      return res.status(400).json({ error: 'Please provide all required fields!' });
    }

    // Process the hobbies field to store it as an array of strings
    // if (formData.hobbies) {
    //   formData.hobbies = formData.hobbies.split(',').map((hobby) => hobby.trim());
    // }
    const user_id=req.user;

    // Include the file paths of the uploaded files in the form data
    // formData.profilePicture = req.files['profilePicture'][0].path;
    // formData.cv = req.files['cv'][0].path;

    // Create a new profile document based on the Profile schema and the form data
    // const profile = new Profile(formData);
    const profile = new Profile({
      userIdentification: user_id, // Assuming userIdentification is a field in your Profile schema
      ...formData // Spread formData object to include all fields
    });

    // Save the profile data to the database
    await profile.save();

    // Send a response indicating success
    res.status(200).json({ message: 'Profile created successfully!' });
  } catch (error) {
    console.error('Error:', error);
    // Send a response indicating failure
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// Define the API endpoint to fetch user details by ID
app.get('/profile',fetchuser, async (req, res) => {
  // app.get('/profile', fetchuser, async (req, res) => {
  try {
    // const userMail = req.params.mailaddress
    const userId = req.user;
    // const profile = await Profile.findOne({ email: userMail });
    // const reg_username=req.query.reg_username;
    const profile = await Profile.findOne({ userIdentification: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Convert the absolute file path to a relative URL by removing the local file system path
    // const imagePath = profile.profilePicture.replace(/^.*[\\\/]/, '');

    // Construct the relative URL to the image
    // const imageUrl = `/uploads/${imagePath}`;
    // profile.profilePicture = imageUrl;



    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.put('/updateProfile', fetchuser, async (req, res) => {
  try {
    const formData = req.body;
    const userId = req.user;

    // Find the profile document by userIdentification
    const profile = await Profile.findOne({ userIdentification: userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Update the profile fields with the new data from formData
    profile.name = formData.name || profile.name;
    profile.email = formData.email || profile.email;
    profile.dateOfBirth = formData.dateOfBirth || profile.dateOfBirth;
    profile.phoneNumber = formData.phoneNumber || profile.phoneNumber;
    profile.education = formData.education || profile.education;
    profile.gender = formData.gender || profile.gender;
    // profile.hobbies = formData.hobbies ? formData.hobbies.split(',').map(hobby => hobby.trim()) : profile.hobbies;
    profile.profilePicture = formData.profilePicture || profile.profilePicture;
    profile.city = formData.city || profile.city;
    profile.jobPreferences = formData.jobPreferences || profile.jobPreferences;
    profile.alumniDetails = formData.alumniDetails || profile.alumniDetails;
    profile.previousExperiences = formData.previousExperiences || profile.previousExperiences;
    profile.cv = formData.cv || profile.cv;

    // Save the updated profile document
    await profile.save();

    // Send a response indicating success
    res.status(200).json({ message: 'Profile updated successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



// POST route for recruiter signup
app.post('/Rreg', async (req, res) => {
  try {
    const { companyName, username, email, password } = req.body;

    // Check if the user already exists with the same email
    const existingUser = await Recruiter.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User Exists' });
    }

    // Create a new recruiter instance
    const newRecruiter = new Recruiter({
      companyName,
      username,
      email,
      password,
    });

    // Save the new recruiter to the database
    await newRecruiter.save();

    const Payload = {
      user: {
        id: newRecruiter.id
      }
    };
    const Rauthtoken = jwt.sign(Payload, JWT_SECRET);

    // Respond with success message
    res.status(200).json({authtoken:Rauthtoken, message: 'Recruiter registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// const Recruiter = mongoose.model('Recruiter', recruiterSchema);

// Route to handle recruiter sign-in
app.post('/Rsignin', async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  try {
    // Check if a recruiter with the provided email exists
    const existingRecruiter = await Recruiter.findOne({ email });

    if (!existingRecruiter) {
      return res.status(404).json({ error: 'Invalid Credentials' });
    }

    // Check if the provided password matches the password in the database (without hashing for this example)
    if (existingRecruiter.password !== password) {
      return res.status(401).json({ error: 'Invalid Credentials' });
    }

    const Payload = {
      user: {
        id: existingRecruiter.id
      }
    };
    const Rauthtoken = jwt.sign(Payload, JWT_SECRET);

    // Return a success response
    res.status(200).json({ authtoken: Rauthtoken, message: 'Recruiter signed in successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get all user profiles
app.get('/AllProfiles', async (req, res) => {
  try {
    const profiles = await Profile.find({});
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});




app.post('/postjobs',fetchuser, async (req, res) => {
  try {
    // Extract job details from the request body
    const {
      companyName,
      postName,
      jobLocation,
      experience,
      jobTiming,
      levelOfRequirement,
      datePosted,
      offeredSalary,
      expiration,
      genderRequirement,
      qualificationRequired,
      companyLink,
      jobDescription,
    } = req.body;
    // const recruiterId = new mongoose.Types.ObjectId(req.user.id);
    const recruiterId = req.user;

    // Create a new job instance based on the Job model and the form data
    const job = new Job({
      recruiter:recruiterId,
      companyName,
      postName,
      jobLocation,
      experience,
      jobTiming,
      levelOfRequirement,
      datePosted,
      offeredSalary,
      expiration,
      genderRequirement,
      qualificationRequired,
      companyLink,
      jobDescription,
    });

    // Save the job data to the database
    const postedJob = await job.save();

    // Respond with a success message
    console.log(postedJob);
    res.status(200).json({message: 'Job posted successfully!' });
  } catch (error) {
    console.error('Error:', error);
    // Respond with an error message
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

//Route to fetch job to a particular recruiter who posted the job:
app.get('/getRjob', fetchuser, async (req, res) => {
  try {
    // const recruiterId = new mongoose.Types.ObjectId(req.user.id);
    const recruiterId = req.user;
    console.log(recruiterId);
    const Rjob = await Job.find({ recruiter: recruiterId });
    if (Rjob.length === 0) {
      return res.status(404).json({ message: 'No jobs found for this recruiter' });
    }

    res.status(200).json(Rjob);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route to update a job posted by the recruiter
// app.put('/Rupdatejob/:id', fetchuser, async (req, res) => {
//   try {
//     const jobId = req.params.id; // Extract the job ID from the URL parameter
//     const { offeredSalary, genderRequirement, qualificationRequired } = req.body;

//     // Create an object to store the updated fields
//     const NewRJob = {};

//     // Check if the fields are provided in the request body, and update the object accordingly
//     if (offeredSalary) NewRJob.offeredSalary = offeredSalary;
//     if (genderRequirement) NewRJob.genderRequirement = genderRequirement;
//     if (qualificationRequired) NewRJob.qualificationRequired = qualificationRequired;

//     // Find the job by ID and populate the 'Recruiter' field
//     let RJob = await Job.findById(jobId);

//     // Check if the job exists
//     if (!RJob) {
//       return res.status(404).json({ message: 'RJob not found' });
//     }

//     // Check if the user trying to update the job is the same as the user who posted the job
//     if (RJob.recruiter.toString() !== req.user) {
//       return res.status(401).send("Not Allowed");
//     }

//     // Update the job fields with the NewRJob object
//     RJob = await Job.findByIdAndUpdate(jobId, { $set: NewRJob }, { new: true });

//     // Send the updated job as a response
//     res.json(RJob);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });
app.put('/updateRjob/:jobId', fetchuser, async (req, res) => {
  try {
    const recruiterId = req.user; // Get the recruiter ID from the authenticated user
    const jobId = req.params.jobId; // Get the job ID from the request parameters

    // Find the job by ID and check if the recruiter matches the authenticated user
    const job = await Job.findOne({ _id: jobId, recruiter: recruiterId });

    if (!job) {
      return res.status(404).json({ error: 'Job not found or you are not authorized to update this job' });
    }

    // Update the job fields based on the request body
    job.companyName = req.body.companyName || job.companyName;
    job.postName = req.body.postName || job.postName;
    job.jobLocation = req.body.jobLocation || job.jobLocation;
    job.experience = req.body.experience || job.experience;
    job.jobTiming = req.body.jobTiming || job.jobTiming;
    job.levelOfRequirement = req.body.levelOfRequirement || job.levelOfRequirement;
    job.datePosted = req.body.datePosted || job.datePosted;
    job.offeredSalary = req.body.offeredSalary || job.offeredSalary;
    job.expiration = req.body.expiration || job.expiration;
    job.genderRequirement = req.body.genderRequirement || job.genderRequirement;
    job.qualificationRequired = req.body.qualificationRequired || job.qualificationRequired;
    job.companyLink = req.body.companyLink || job.companyLink;
    job.jobDescription = req.body.jobDescription || job.jobDescription;

    // Save the updated job
    const updatedJob = await job.save();

    res.json(updatedJob);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// Route to delete a job posted by a particular recruiter
app.delete('/deleteRjob/:jobId', fetchuser, async (req, res) => {
  try {
    const recruiterId = req.user; // Get the recruiter ID from the authenticated user
    const jobId = req.params.jobId; // Get the job ID from the request parameters

    // Find the job by ID and check if the recruiter matches the authenticated user
    const job = await Job.findOne({ _id: jobId, recruiter: recruiterId });

    if (!job) {
      return res.status(404).json({ error: 'Job not found or you are not authorized to delete this job' });
    }

    // Delete the job
    await job.remove();

    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// Route to handle company and founder profile creation
app.post('/makeRprofile', fetchuser,async (req, res) => {
  try {
    // Extract profile details from the request body
    const {
      companyName,
      // companyUsername,
      companyHistory,
      companyDetails,
      foundersDetails,
    } = req.body;
    const refRecruiterId = req.user;

    // Create a new RProfile instance based on the RProfile model and the form data
    const rprofile = new Rprofile({
      recruiter : refRecruiterId,
      companyName,
      // companyUsername,
      companyHistory,
      companyDetails,
      foundersDetails,
    });

    // Save the rprofile data to the database
    await rprofile.save();

    // Respond with a success message
    res.status(200).json({ message: 'Profile created successfully!' });
  } catch (error) {
    console.error('Error:', error);
    // Respond with an error message
    res
      .status(500)
      .json({ error: 'Something went wrong. Please try again later.' });
  }
});


// Route to get the Recruiter's profile data based on company name
app.get('/getRProfile', fetchuser,async (req, res) => {
  // const companyUserName = req.query.companyUserName; 
  const refRecruiterId = req.user;
  console.log(refRecruiterId);

  try {
    // const profile = await Rprofile.findOne({ companyUsername: companyUserName });
    const profile = await Rprofile.findOne({ recruiter:refRecruiterId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//To Update RProfile.........
app.put('/updateRProfile',fetchuser,async (req, res) => {
  try {
    const refRecruiterId = req.user;
    const { companyName, companyHistory, companyDetails, foundersDetails } = req.body;

    // Find the existing profile document
    const profile = await Rprofile.findOne({ recruiter: refRecruiterId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Update the profile fields
    profile.companyName = companyName;
    profile.companyHistory = companyHistory;
    profile.companyDetails = companyDetails;
    profile.foundersDetails = foundersDetails;

    // Save the updated profile document
    const updatedProfile = await profile.save();

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});






// Route to fetch all jobs
app.get('/get_jobs', async (req, res) => {
  try {
    // Fetch all jobs from the database
    const jobs = await Job.find({});
    console.log(jobs);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to fetch a specific job by ID
app.get('/get_job/:jobId', async (req, res) => {
  try {
    const jobId = req.params.jobId;
    // Fetch the specific job from the database by its ID
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to update the savedByUsers field
app.put('/updatejobs/:id', async (req, res) => {
  const jobId = req.params.id;
  try {
      // Find the job by ID
      const job = await Job.findById(jobId);
      if (!job) {
          return res.status(404).json({ message: 'Job not found' });
      }

      // Check if the user ID is provided in the request body
      const userId = req.body.userId;
      if (!userId) {
          return res.status(400).json({ message: 'User ID is required' });
      }

      // Check if the user ID is already in the savedByUsers array
      const userIndex = job.savedByUsers.indexOf(userId);
      if (userIndex !== -1) {
          // If user ID is already in the array, remove it
          job.savedByUsers.splice(userIndex, 1);
      } else {
          // If user ID is not in the array, add it
          job.savedByUsers.push(userId);
      }

      // Save the updated job
      await job.save();

      return res.status(200).json({ message: 'Saved job updated successfully', job });
  } catch (error) {
      console.error('Error updating saved job:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
});

// // Route to handle recruiter logout
// app.post('/RLogOut', fetchuser, async (req, res) => {
//   try {
//     // Invalidate the recruiter's authentication token by removing it from localStorage
//     // Assuming 'RToken' is the key used to store the token
//     localStorage.removeItem('RToken');

//     res.status(200).json({ message: 'Recruiter logged out successfully' });
//   } catch (error) {
//     console.log('HayWire');
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });



app.listen(PORT, () => {
  console.log("Server started");
});

