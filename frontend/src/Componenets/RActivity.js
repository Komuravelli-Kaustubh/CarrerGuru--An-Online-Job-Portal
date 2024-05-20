// import React, { useState, useEffect } from 'react';
// import RNavbar from './RNavbar';

// const RActivity = () => {
//     const [jobs, setJobs] = useState([]);

//     useEffect(() => {
//         // Fetch all jobs posted by the current recruiter
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch('http://localhost:5001/getRjob',{
//                     method:'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         // "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmFjYjhjYWEyN2FhYmNjYzMyNTMwIn0sImlhdCI6MTcxNTYxOTM5MX0.7IGyeoPnNVhp7KhkFLEWhIt3pbFYzPvS9lRxxH7Lb58"
//                         "authtoken": localStorage.getItem('RToken')
//                     }
//                 });
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch jobs');
//                 }
//                 const data = await response.json();
//                 setJobs(data);
//             } catch (error) {
//                 console.error('Error fetching jobs:', error);
//             }
//         };
//         fetchJobs();
//     }, []);

//     const handleUpdate = async (jobId) => {
//         try {
//             const response = await fetch(`http://localhost:5001/updateRjob/${jobId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "authtoken" : localStorage.getItem('RToken')
//                 },
//                 body: JSON.stringify({}) // Send empty body or only send fields that need updating
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to update job');
//             }
//             // Update the jobs state to reflect the changes
//             setJobs(prevJobs => prevJobs.map(job => {
//                 if (job._id === jobId) {
//                     // Update the job details if needed
//                 }
//                 return job;
//             }));
//         } catch (error) {
//             console.error('Error updating job:', error);
//         }
//     };

//     const handleDelete = async (jobId) => {
//         try {
//             const response = await fetch(`http://localhost:5001/deleteRjob/${jobId}`, {
//                 method: 'DELETE',
//                 headers: {
//                     "authtoken" : localStorage.getItem('RToken')
//                 },
                
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to delete job');
//             }
//             // Remove the deleted job from the jobs state
//             setJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
//         } catch (error) {
//             console.error('Error deleting job:', error);
//         }
//     };

//     return (
//         <div>
//             <RNavbar />
//             <div className="container mt-5">
//                 <h3 className="mb-4">Your Posted Jobs</h3>
//                 <div className="row">
//                     {jobs.map(job => (
//                         <div key={job._id} className="col-md-4 mb-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h5 className="card-title">{job.postName}</h5>
//                                     <h6 className="card-subtitle mb-2 text-muted">{job.companyName}</h6>
//                                     <p className="card-text">{job.jobDescription.substring(0, 100)}...</p>
//                                     <button onClick={() => handleUpdate(job._id)} className="btn btn-success mx-1 mb-2">Update</button>
//                                     <button onClick={() => handleDelete(job._id)} className="btn btn-danger mb-2">Delete</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RActivity;
//........new........................................
import React, { useState, useEffect } from 'react';
import RNavbar from './RNavbar';
import JobUpdateForm from './JobUpdateForm';

const RActivity = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Fetch all jobs posted by the current recruiter
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:5001/getRjob',{
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "authtoken" : localStorage.getItem('RToken')
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch jobs');
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        fetchJobs();
    }, []);

    const handleUpdate = (jobId) => {
        // Set the selected job when update button is clicked
        const selectedJob = jobs.find(job => job._id === jobId);
        setSelectedJob(selectedJob);
        setShowModal(true);
    };

    const handleDelete = async (jobId) => {
        try {
            const response = await fetch(`http://localhost:5001/deleteRjob/${jobId}`, {
                method: 'DELETE',
                headers: {
                    "authtoken" : localStorage.getItem('RToken')
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete job');
            }
            // Remove the deleted job from the jobs state
            setJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedJob(null); // Reset selectedJob state
    };

    return (
        <div>
            <RNavbar />
            <div className="container mt-5">
                <h3 className="mb-4">Your Posted Jobs</h3>
                <div className="row">
                    {jobs.map(job => (
                        <div key={job._id} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{job.postName}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{job.companyName}</h6>
                                    <p className="card-text">{job.jobDescription.substring(0, 100)}...</p>
                                    <button onClick={() => handleUpdate(job._id)} className="btn btn-info mx-1 mb-2"><i class="fa-solid fa-eye"></i></button>
                                    {/* <button onClick={() => handleUpdate(job._id)} className="btn btn-success mx-1 mb-2">Update</button> */}
                                    <button onClick={() => handleDelete(job._id)} className="btn btn-danger mb-2"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Modal for viewing and updating job details */}
            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedJob.postName}</h5>
                                <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <JobUpdateForm job={selectedJob} setJobs={setJobs} setSelectedJob={setSelectedJob} handleCloseModal={handleCloseModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal backdrop */}
            {showModal && <div className="modal-backdrop show"></div>}
        </div>
    );
};

export default RActivity;
