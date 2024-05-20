import React, { useEffect, useState } from 'react';
import RNavbar from './RNavbar';

const RProfile = () => {
  const [profileData, setProfileData] = useState({
    companyName: '',
    companyHistory: '',
    companyDetails: '',
    foundersDetails: '',
  });

  useEffect(() => {
    const companyUserName = localStorage.getItem('companyUserName');
    if (companyUserName) {
      fetchProfileData(companyUserName);
    }
  }, []);

  const fetchProfileData = async (companyUserName) => {
    try {
      const response = await fetch(`http://localhost:5001/getRProfile?companyUserName=${encodeURIComponent(companyUserName)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "authtoken": localStorage.getItem('RToken')
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        console.error('Error fetching profile data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container py-4">
      <RNavbar />
      <h1 className="text-center mb-4">Recruiter Profile</h1>
      <div className="card p-4" style={{ border: '1px solid #ccc', backgroundColor: '#fff', borderRadius: '10px' }}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            value={profileData.companyName}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyHistory">Company History</label>
          <textarea
            className="form-control"
            id="companyHistory"
            value={profileData.companyHistory}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyDetails">Company Details</label>
          <textarea
            className="form-control"
            id="companyDetails"
            value={profileData.companyDetails}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="foundersDetails">Founders Details</label>
          <textarea
            className="form-control"
            id="foundersDetails"
            value={profileData.foundersDetails}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default RProfile;
