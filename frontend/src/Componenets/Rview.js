import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RNavbar from './RNavbar';

const ViewProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    // Fetch all profiles from the backend API
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:5001/AllProfiles'); // Replace with your backend API endpoint for fetching profiles
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
    fetchProfiles();
  }, []);

  // Function to handle opening the modal and setting the selected profile
  const handleShowModal = (profile) => {
    setSelectedProfile(profile);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProfile(null);
  };

  // return (
  //   <>
  //     <style>
  //       {`
  //         body {
  //           background-color: #f0f0f0;
  //           color: #333;
  //         }
  //       `}
  //     </style>
  //     <div className="container py-5">
  //       <h1 className="text-center mb-4">View Profiles</h1>
  //       <div className="row">
  //         {profiles.map((profile) => (
  //           <div className="col-lg-6" key={profile._id}>
  //             <div className="card mb-4">
  //               <div className="card-body">
  //                 <div className="d-flex align-items-center justify-content-between">
  //                   <div>
  //                     <h5 className="card-title">{profile.name}</h5>
  //                     <p className="card-text">City: {profile.city}</p>
  //                   </div>
  //                   <div>
  //                     <i className="fas fa-user fa-2x"></i>
  //                   </div>
  //                 </div>
  //                 <p className="card-text mb-0">
  //                   <i className="fas fa-envelope"></i> Email: {profile.email}
  //                 </p>
  //                 <button className="btn btn-info mt-3" onClick={() => handleShowModal(profile)}>
  //                   Read More
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>

  //     {/* Modal for displaying detailed information */}
  //     {selectedProfile && (
  //       <Modal show={showModal} onHide={handleCloseModal}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>{selectedProfile.name}</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <p>City: {selectedProfile.city}</p>
  //           <p>Email: {selectedProfile.email}</p>
  //           <p>Date of Birth: {new Date(selectedProfile.dateOfBirth).toLocaleDateString()}</p>
  //           <p>Phone Number: {selectedProfile.phoneNumber}</p>
  //           <p>Education: {selectedProfile.education}</p>
  //           <p>Gender: {selectedProfile.gender}</p>
  //           <p>Hobbies: {selectedProfile.hobbies.join(', ')}</p>
  //           {/* Add other details here */}
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={handleCloseModal}>
  //             Close
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     )}
  //   </>
  // );
  
  return (
    <>
    
       <style>
         {`
           body {
             background-color: #f0f0f0;
             color: #333;
           }
        `}
       </style>
       <RNavbar/>
       <div className="container py-5">
         <h1 className="text-center mb-4">View Profiles</h1>
         <div className="row">
           {profiles.map((profile) => (
             <div className="col-lg-6" key={profile._id}>
               <div className="card mb-4">
                 <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                     <div>
                       <h5 className="card-title">{profile.name}</h5>
                       <p className="card-text">City: {profile.city}</p>
                     </div>
                     <div>
                       <i className="fas fa-user fa-2x"></i>
                     </div>
                   </div>
                   <p className="card-text mb-0">
                     <i className="fas fa-envelope"></i> Email: {profile.email}
                   </p>
                   <button className="btn btn-info mt-3" onClick={() => handleShowModal(profile)}>
                     Read More
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>

      {/* ... Rest of the code ... */}

      {/* Modal for displaying detailed information */}
      {selectedProfile && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProfile.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>City: {selectedProfile.city}</p>
            <p>Email: {selectedProfile.email}</p>
            <p>Date of Birth: {new Date(selectedProfile.dateOfBirth).toLocaleDateString()}</p>
            <p>Phone Number: {selectedProfile.phoneNumber}</p>
            <p>Education: {selectedProfile.education}</p>
            <p>Gender: {selectedProfile.gender}</p>
            {/* <p>Hobbies: {selectedProfile.hobbies.join(', ')}</p> */}
            <p>Alumni Details: {selectedProfile.alumniDetails}</p>
            <p>Previous Experiences: {selectedProfile.previousExperiences}</p>

            <div className="mt-3">
              {/* <p>Profile Picture:</p>
              {selectedProfile.profilePicture && (
                <>
                  <img src={selectedProfile.profilePicture} alt="Profile Picture" width="150" />
                  <a href={selectedProfile.profilePicture} download className="btn btn-primary btn-sm ml-2">
                    Download
                  </a>
                </>
              )} */}
            </div>
            <div className="mt-3">
              {/* <p>CV:</p>
              {selectedProfile.cv && (
                <>
                  <a href={selectedProfile.cv} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                  <a href={selectedProfile.cv} download className="btn btn-primary btn-sm ml-2">
                    Download
                  </a>
                </>
              )} */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ViewProfiles;

