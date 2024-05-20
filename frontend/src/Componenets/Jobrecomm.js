
// import React, { useState, useEffect } from 'react';
// import JobCard from './JobCard';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Newnavbar from './Newnavbar';

// const Jobrecomm = () => {
//     const [jobs, setJobs] = useState([]);
//     const [selectedJob, setSelectedJob] = useState(null);
//     const [keywords, setKeywords] = useState('');
//     const [location, setLocation] = useState('');
//     const [jobType, setJobType] = useState('');
    
//     useEffect(() => {
//         // Fetch all jobs from the server when component mounts
//         fetchJobs();
//     }, []);
    
//     const fetchJobs = async () => {
//         try {
//             const response = await fetch('http://localhost:5001/get_jobs', {
//                 headers: {
//                     accept: 'application/json',
//                     'User-agent': 'learning app',
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to fetch jobs');
//             }
//             const jobData = await response.json();
//             console.log('Fetched job data:', jobData);
//             setJobs(jobData);
//         } catch (error) {
//             console.error('Error fetching jobs:', error);
//         }
//     };

//     const handleJobClick = (job) => {
//         setSelectedJob(job);
//     };

//     const handleCloseModal = () => {
//         setSelectedJob(null);
//     };

//     const handleSearch = () => {
//         // Perform search logic using keywords, location, and jobType
//         // For now, just log the search criteria
//         console.log('Search criteria:', { keywords, location, jobType });
//     };

//     return (
//         <div className="container-fluid">
//             <Newnavbar />
//             <div className="row m-3">
//                 <div className="leftsearch col-md-2 ms-1" style={{ backgroundColor: "whitesmoke" }}>
//                     <div className="search_box mb-4">
//                         <div className="nest1 row ">
//                             <h4>Search using keywords: </h4>
//                         </div>

//                         <div className="mt-2">
//                             <i className="fa-solid fa-magnifying-glass"></i> <input type="text" style={{ width: "80%" }}
//                                 placeholder=" Job Description, Company name" />
//                         </div>
//                     </div>


//                     <div className="Job_location_search mt-5">
//                         <div className="nest1 row ">
//                             <h4>Job Location: </h4>
//                         </div>

//                         <div className="mt-2 d-flex flex-row">
//                             <i className="fa-solid fa-location-pin-lock me-3"></i>
//                             <div className="dropdown">
//                                 <a className="btn bg-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
//                                     aria-expanded="false">
//                                     Job Location
//                                 </a>

//                                 <ul className="dropdown-menu dropdown-menu-white ">
//                                     <li><a className="dropdown-item bg-white" href="#">New Delhi</a></li>
//                                     <li><a className="dropdown-item bg-white" href="#">Mumbai</a></li>
//                                     <li><a className="dropdown-item bg-white" href="#">Madras</a></li>
//                                     <li><a className="dropdown-item bg-white" href="#">Indore</a></li>
//                                     <li><a className="dropdown-item bg-white" href="#">Bhopal</a></li>
//                                     <li><a className="dropdown-item bg-white" href="#">Amritsar</a></li>
//                                     <li><a className="dropdown-item bg-white" href="#">Bangalore</a></li>
//                                     <li><a className="dropdown-item bg-white" href="#">Roorkee</a></li>
//                                     <li><a className="dropdown-item bg-white" href="#">kochi</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="jobparameters mt-5">
//                         <h4>Job Type:</h4>

//                         <div className="form-check">
//                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
//                             <label className="form-check-label" for="flexRadioDefault1">
//                                 Full Time
//                             </label>
//                         </div>
//                         <div className="form-check">
//                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
//                                 checked />
//                             <label className="form-check-label" for="flexRadioDefault2">
//                                 Freelancer
//                             </label>
//                         </div>
//                         <div className="form-check">
//                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
//                                 checked />
//                             <label className="form-check-label" for="flexRadioDefault2">
//                                 Part Time
//                             </label>
//                         </div>
//                         <div className="form-check">
//                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
//                             <label className="form-check-label" for="flexRadioDefault1">
//                                 Internship
//                             </label>
//                         </div>
//                         <div className="form-check">
//                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
//                                 checked />
//                             <label className="form-check-label" for="flexRadioDefault2">
//                                 Temperory
//                             </label>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="col-md-9">
//                     {/* <div className="row"> */}
//                     {/* Display job cards */}
//                     {jobs.map((job) => (
//                         <div className="col-md-12 mb-3" key={job._id}> {/* Added mb-3 for margin-bottom */}
//                             <JobCard job={job} onJobClick={handleJobClick} />
//                         </div>
//                     ))}
//                     {/* </div> */}
//                 </div>
//             </div >
//         </div >
//     );
// };

// export default Jobrecomm;

//NEwNEWNEWNENWNENWNENEWNWNENWNENWNENENWNENWNENWENWNENENEW.........(if doesnt work go above code)
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import Newnavbar from './Newnavbar';

const Jobrecomm = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [keywords, setKeywords] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await fetch('http://localhost:5001/get_jobs', {
                headers: {
                    accept: 'application/json',
                    'User-agent': 'learning app',
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }
            const jobData = await response.json();
            setJobs(jobData);
            setFilteredJobs(jobData);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleSearch = () => {
        const lowerCaseKeywords = keywords.toLowerCase();
        const lowerCaseLocation = location.toLowerCase();
        const lowerCaseJobType = jobType.toLowerCase();

        const filtered = jobs.filter(job => {
            const matchKeywords = job.postName.toLowerCase().includes(lowerCaseKeywords) || job.companyName.toLowerCase().includes(lowerCaseKeywords);
            const matchLocation = !location || job.jobLocation.toLowerCase().includes(lowerCaseLocation);
            const matchJobType = !jobType || job.jobTiming.toLowerCase() === lowerCaseJobType;
            return matchKeywords && matchLocation && matchJobType;
        });

        setFilteredJobs(filtered);
    };

    return (
        <div className="container-fluid">
            <Newnavbar />
            <div className="row m-3">
                <div className="leftsearch col-md-2 ms-1" style={{ backgroundColor: "whitesmoke" }}>
                    <div className="search_box mb-4">
                        <div className="nest1 row">
                            <h4>Search using keywords:</h4>
                        </div>
                        <div className="mt-2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input 
                                type="text" 
                                style={{ width: "80%" }}
                                placeholder="Job Description, Company name"
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="Job_location_search mt-5">
                        <div className="nest1 row">
                            <h4>Job Location:</h4>
                        </div>
                        <div className="mt-2">
                            <i className="fa-solid fa-location-pin-lock me-3"></i>
                            <input 
                                type="text"
                                style={{ width: "80%" }}
                                placeholder="Enter location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="jobparameters mt-5">
                        <h4>Job Type:</h4>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="jobType" 
                                id="fullTime" 
                                value="full time"
                                onChange={(e) => setJobType(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="fullTime">
                                Full Time
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="jobType" 
                                id="freelancer" 
                                value="freelancer"
                                onChange={(e) => setJobType(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="freelancer">
                                Freelancer
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="jobType" 
                                id="partTime" 
                                value="part time"
                                onChange={(e) => setJobType(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="partTime">
                                Part Time
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="jobType" 
                                id="internship" 
                                value="internship"
                                onChange={(e) => setJobType(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="internship">
                                Internship
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                   type="radio" 
                                name="jobType" 
                                id="temporary" 
                                value="temporary"
                                onChange={(e) => setJobType(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="temporary">
                                Temporary
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-3" onClick={handleSearch}>Search</button>
                </div>

                <div className="col-md-9">
                    {filteredJobs.map((job) => (
                        <div className="col-md-12 mb-3" key={job._id}>
                            <JobCard job={job} onJobClick={handleJobClick} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Jobrecomm;
