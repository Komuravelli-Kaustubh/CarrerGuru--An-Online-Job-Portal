// import logo from './logo.svg';
import './App.css';
import Dashboard from './Componenets/Dashboard';
import { Routes, Route } from 'react-router-dom'
import Home from './Componenets/Home';
import Jobrecomm from './Componenets/Jobrecomm';
// import Previous from './Componenets/Previous';
import Profile from './Componenets/Profile';
import Makeprof from './Componenets/Makeprof.js';
import Savedjobs from './Componenets/Savedjobs';
import Signinpage from './Componenets/Signinpage';
import Signuppage from './Componenets/Signuppage';
import Jobov1 from './Componenets/Jobov1';
import Jobov2 from './Componenets/Jobov2';
import Jobov3 from './Componenets/Jobov3';
import Jobov4 from './Componenets/Jobov4';
import Jobov5 from './Componenets/Jobov5';
import Jobov6 from './Componenets/Jobov6';
import RecruiterSignUp from './Componenets/RecruiterSignup';
import RecruiterSignIn from './Componenets/RecruiterSignin';
import JobseekerCard from './Componenets/Rview';
import ViewJobSeekers from './Componenets/Rview';
import PostJobs from './Componenets/PostJobs';
import RmakeProfile from './Componenets/RmakeProfile';
import RProfile from './Componenets/Rprofile';
import JobList from './Componenets/JobList.js'; // Import the new component
import JobOverview from './Componenets/JobOverview';
import RActivity from './Componenets/RActivity';
import UpdateRProfile from './Componenets/UpdateRProfile.js'
import UpdateProfile from './Componenets/UpdateProfile.js';

function App() {
  return (
    <div className="App">
      <>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/Signinpage" element={<Signinpage />} />
          <Route path="/Signuppage" element={<Signuppage />} />
          <Route path="/RecruiterSignup" element={<RecruiterSignUp />} />
          <Route path="/RecruiterSignIn" element={<RecruiterSignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Makeprof" element={<Makeprof />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Jobrecomm" element={<Jobrecomm />} >
            <Route path="JobList" element={<JobList />} /> Display job listings
            {/* <Route path=":jobId" element={<JobDetails />} /> Display job details */}
            <Route path="Jobov1" element={<Jobov1 />} />
            <Route path="Jobov2" element={<Jobov2 />} />
            <Route path="Jobov3" element={<Jobov3 />} />
            <Route path="Jobov4" element={<Jobov4 />} />
            <Route path="Jobov5" element={<Jobov5 />} />
            <Route path="Jobov6" element={<Jobov6 />} />
          </Route>
          <Route path="/Jobrecomm/:jobId" element={<JobOverview />} />
          <Route path="/Savedjobs" element={<Savedjobs />} />
          <Route path="/JobseekerCard" element={<JobseekerCard />} />
          <Route path="/JobOverview" element={<JobOverview/>}/>
          <Route path="/JobList" element={<JobList/>}/>
          <Route path="/ViewJobSeekers" element={<ViewJobSeekers />} />
          <Route path="/PostJobs" element={<PostJobs />} />
          <Route path="/RmakeProfile" element={<RmakeProfile />} />
          <Route path="/RProfile" element={<RProfile />} />
          <Route path="/RActivity" element={<RActivity/>}/>
          <Route path="/UpdateRProfile" element={<UpdateRProfile/>}/>
          <Route path="/UpdateProfile" element={<UpdateProfile/>}/>

        </Routes>
      </>
    </div>
  )
}


export default App;
