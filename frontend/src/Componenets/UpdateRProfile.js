// import RNavbar from './RNavbar';
// import React, { useState, useEffect } from 'react';

// const UpdateRProfile = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     companyHistory: '',
//     companyDetails: '',
//     foundersDetails: '',
//   });

//   useEffect(() => {
//     // Fetch the existing profile data
//     fetch('http://localhost:5001/getRProfile', {
//       headers: {
//         'Content-Type': 'application/json',
//         "authtoken": localStorage.getItem('RToken')
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         setFormData({
//           companyName: data.companyName,
//           companyHistory: data.companyHistory,
//           companyDetails: data.companyDetails,
//           foundersDetails: data.foundersDetails,
//         });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5001/updateRProfile', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           "authtoken": localStorage.getItem('RToken')
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Profile updated successfully!');
//       } else {
//         alert('Error updating profile:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error updating profile. Please try again later.');
//     }
//   };

//   return (
//     <div className="container py-4">
//         <RNavbar/>
//       <h1 className="text-center mb-4">Update Company Profile</h1>
//       <div className="row justify-content-center">
//         <div className="col-lg-6">
//           <div className="card p-4">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="companyName">Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="companyName"
//                   name="companyName"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="companyHistory">Company History</label>
//                 <textarea
//                   className="form-control"
//                   id="companyHistory"
//                   name="companyHistory"
//                   value={formData.companyHistory}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="companyDetails">Company Details</label>
//                 <textarea
//                   className="form-control"
//                   id="companyDetails"
//                   name="companyDetails"
//                   value={formData.companyDetails}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="foundersDetails">Founders Details</label>
//                 <textarea
//                   className="form-control"
//                   id="foundersDetails"
//                   name="foundersDetails"
//                   value={formData.foundersDetails}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Update Profile
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateRProfile;
/////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import RNavbar from './RNavbar';

const UpdateRProfile = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyHistory: '',
    companyDetails: '',
    foundersDetails: '',
  });

  useEffect(() => {
    // Fetch the existing profile data
    fetch('http://localhost:5001/getRProfile', {
      headers: {
        'Content-Type': 'application/json',
        "authtoken": localStorage.getItem('RToken')
      }
    })
      .then(response => response.json())
      .then(data => {
        setFormData({
          companyName: data.companyName,
          companyHistory: data.companyHistory,
          companyDetails: data.companyDetails,
          foundersDetails: data.foundersDetails,
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

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
      const response = await fetch('http://localhost:5001/updateRProfile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "authtoken": localStorage.getItem('RToken')
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
      } else {
        alert('Error updating profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating profile. Please try again later.');
    }
  };

  return (
    <div className="container py-5">
      <RNavbar />
      <div className="mt-5 row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Update Company Profile</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="companyName" className="font-weight-bold">Company Name</label>
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
                <div className="form-group">
                  <label htmlFor="companyHistory" className="font-weight-bold">Company History</label>
                  <textarea
                    className="form-control"
                    id="companyHistory"
                    name="companyHistory"
                    rows="4"
                    value={formData.companyHistory}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyDetails" className="font-weight-bold">Company Details</label>
                  <textarea
                    className="form-control"
                    id="companyDetails"
                    name="companyDetails"
                    rows="4"
                    value={formData.companyDetails}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="foundersDetails" className="font-weight-bold">Founders Details</label>
                  <textarea
                    className="form-control"
                    id="foundersDetails"
                    name="foundersDetails"
                    rows="4"
                    value={formData.foundersDetails}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRProfile;
