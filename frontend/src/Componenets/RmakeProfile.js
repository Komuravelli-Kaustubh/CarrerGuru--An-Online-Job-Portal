import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RNavbar from './RNavbar';

const MakeProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    companyHistory: '',
    companyDetails: '',
    foundersDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the server
      const response = await fetch('http://localhost:5001/makeRprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "authtoken" : localStorage.getItem('RToken')
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Profile data posted successfully!');
        // Reset the form data after successful submission
        setFormData({
          companyName: '',
          companyHistory: '',
          companyDetails: '',
          foundersDetails: '',
        });

        // User successfully signed up, navigate to the dashboard or other page
        // navigate('/ViewJobSeekers');
        navigate('/RecruiterSignIn')

      } else {
        console.error('Error posting profile data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container py-4">
      {/* <RNavbar /> */}
      <h1 className="text-center mb-4">Create Company Profile</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="companyUsername">Company Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyUsername"
                  name="companyUsername"
                  value={formData.companyUsername}
                  onChange={handleChange}
                  required
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="companyHistory">Company History</label>
                <textarea
                  className="form-control"
                  id="companyHistory"
                  name="companyHistory"
                  value={formData.companyHistory}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyDetails">Company Details</label>
                <textarea
                  className="form-control"
                  id="companyDetails"
                  name="companyDetails"
                  value={formData.companyDetails}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-4">
                <label htmlFor="foundersDetails">Founders Details</label>
                <textarea
                  className="form-control"
                  id="foundersDetails"
                  name="foundersDetails"
                  value={formData.foundersDetails}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create Profile
              </button>
            </form>

          </div>
          <a href="" className="m-5 btn btn-secondary"><i class="fa-solid fa-backward"></i>  Go Back</a>
        </div>
      </div>
    </div>
  );
};

export default MakeProfile;
