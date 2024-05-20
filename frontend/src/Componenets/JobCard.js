// import React from 'react';
// import { Link } from 'react-router-dom';

// const JobCard = ({ job }) => {
//   return (
//     <div className="row p-3 m-2 job mb-3" style={{ borderRadius: "4%", backgroundColor: "whitesmoke" }}>
//       <div className="row logoandotherdetails">
//         <div className="col-md-2">
//           <img src={job.companyLogo} className="img-fluid rounded-circle" style={{ width: "100%", height: "100%" }} alt={`${job.companyName} Logo`} />
//         </div>
//         <div className="company_name col">
//           <div className="d-flex flex-row">
//             <h3>{job.companyName}</h3>
//             <i className="fa-regular fa-bookmark btn" style={{ marginLeft: "auto" }}></i>
//           </div>
//           <div className="row jobdetails">
//             <div className="d-flex flex-row">
//               <div className="sector me-2">
//                 <i className="fa-solid fa-briefcase jobdescription"></i>{job.postName}
//               </div>
//               <div className="location me-3">
//                 <i className="fa-solid fa-location-dot  location"></i>{job.jobLocation}
//               </div>
//               <div className="companyexperience me-3">
//                 <i className="fa-solid fa-users"></i>{job.experience} Experience
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="availability row">
//         <div className="d-flex flex-row ms-5">
//           <div className="p-2 mt-2 me-4 border border-dark text-white" style={{ borderRadius: "15%", backgroundColor: "rgb(175, 129, 208)" }}>{job.jobTiming}</div>
//           <div className="p-2 mt-2 me-4 border border-dark text-white" style={{ borderRadius: "15%", backgroundColor: "rgb(242, 170, 36)" }}>{job.levelOfRequirement}</div>
//           <Link to={`/Jobrecomm/${job._id}`} className="btn btn-primary" style={{ marginLeft: "auto" }}>Click Here</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobCard;
//NEWNEWNEWNEW

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const JobCard = ({ job, onJobClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(job.savedJob);

  const handleModalShow = () => {
    setShowModal(true);
    onJobClick(job); // Pass the selected job to the parent component
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBookmarkToggle = async () => {
    try {
      // const userId = getUserId(); // Implement a function to get the current user's ID
      const response = await fetch(`http://localhost:5001/updatejobs/${job._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ userId, savedJob: !isBookmarked }),
      });
      if (!response.ok) {
        throw new Error('Failed to update job');
      }
      setIsBookmarked(!isBookmarked); // Toggle bookmarked status
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };
 

  return (
    <>
      <div className="row p-3 m-2 job mb-3" style={{ borderRadius: "4%", backgroundColor: "whitesmoke" }}>
        <div className="row logoandotherdetails">
          <div className="col-md-2">
            <img src={job.companyLogo} className="img-fluid rounded-circle" style={{ width: "100%", height: "100%" }} alt={`${job.companyName} Logo`} />
          </div>
          <div className="company_name col">
            <div className="d-flex flex-row">
              <h3>{job.companyName}</h3>
              {/* <i className={`fa-regular fa-bookmark btn ${isBookmarked ? 'text-primary' : ''}`} style={{ marginLeft: "auto" }} onClick={handleBookmarkToggle}></i> */}
            </div>
            <div className="row jobdetails">
              <div className="d-flex flex-row">
                <div className="sector me-2">
                  <i className="fa-solid fa-briefcase jobdescription"></i>{job.postName}
                </div>
                <div className="location me-3">
                  <i className="fa-solid fa-location-dot  location"></i>{job.jobLocation}
                </div>
                <div className="companyexperience me-3">
                  <i className="fa-solid fa-users"></i>{job.experience} Experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="availability row">
          <div className="d-flex flex-row ms-5">
            <div className="p-2 mt-2 me-4 border border-dark text-white" style={{ borderRadius: "15%", backgroundColor: "rgb(175, 129, 208)" }}>{job.jobTiming}</div>
            <div className="p-2 mt-2 me-4 border border-dark text-white" style={{ borderRadius: "15%", backgroundColor: "rgb(242, 170, 36)" }}>{job.levelOfRequirement}</div>
            <button className="btn btn-primary" style={{ marginLeft: "auto" }} onClick={handleModalShow}>Click Here</button>
          </div>
        </div>
      </div>

      {/* Modal for displaying job details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{job?.companyName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Post Name: {job?.postName}</p>
          <p>Location: {job?.jobLocation}</p>
          <p>Experience: {job?.experience}</p>
          <p>Timings:{job?.jobTiming}</p>
          <p>Level of Urgency:{job?.levelOfRequirement}</p>
          <p>Job Posted:{job?.datePosted}</p>
          <p>Salary:{job?.offeredSalary}</p>
          <p>Job expires:{job?.expiration}</p>
          <p>Gender specification:{job?.genderRequirement}</p>
          <p>Qualifications required:{job?.qualificationRequired}</p>
          <a href={job?.companyLink} target="_blank">Company Link</a>
          <p>Job Description:{job?.jobDescription}</p>
          {/* Add more job details here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JobCard;
