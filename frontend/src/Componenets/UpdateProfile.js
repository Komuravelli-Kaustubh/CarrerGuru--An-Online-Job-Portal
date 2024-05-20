// import React, { useState, useEffect } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import Newnavbar from './Newnavbar';

// const UpdateProfile = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         dateOfBirth: '',
//         phoneNumber: '',
//         education: '',
//         gender: '',
//         hobbies: '',
//         profilePicture: '',
//         city: '',
//         jobPreferences: '',
//         alumniDetails: '',
//         previousExperiences: '',
//         cv: ''
//     });
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         // Fetch profile data
//         fetch('http://localhost:5001/profile', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 "authtoken": localStorage.getItem('token')
//             }
//         })
//             .then(response => response.json())
//             .then(data => setFormData(data))
//             .catch(error => {
//                 console.error('Error fetching profile:', error);
//                 setErrorMessage('Failed to fetch profile data');
//             });
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const newValue=name==='hobbies'?value.toString():value;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: newValue
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:5001/updateProfile', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 "authtoken" : localStorage.getItem('token')
//             },
//             body: JSON.stringify(formData)
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setSuccessMessage(data.message);
//             })
//             .catch(error => {
//                 console.error('Error updating profile:', error);
//                 setErrorMessage('Failed to update profile');
//             });
//     };

//     return (
//         <div >
//             <Newnavbar/>
//             <div className="mt-5 row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="card shadow">
//                         <div className="card-body">
//                             <h2 className="mb-4">Update Profile</h2>
//                             {successMessage && <Alert variant="success">{successMessage}</Alert>}
//                             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//                             <Form onSubmit={handleSubmit}>
//                                 <Form.Group controlId="formName">
//                                     <Form.Label>Name</Form.Label>
//                                     <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formEmail">
//                                     <Form.Label>Email</Form.Label>
//                                     <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formDateOfBirth">
//                                     <Form.Label>Date of Birth</Form.Label>
//                                     <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formPhoneNumber">
//                                     <Form.Label>Phone Number</Form.Label>
//                                     <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formEducation">
//                                     <Form.Label>Education</Form.Label>
//                                     <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formGender">
//                                     <Form.Label>Gender</Form.Label>
//                                     <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
//                                         <option value="Male">Male</option>
//                                         <option value="Female">Female</option>
//                                     </Form.Control>
//                                 </Form.Group>

//                                 <Form.Group controlId="formHobbies">
//                                     <Form.Label>Hobbies</Form.Label>
//                                     <Form.Control type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formProfilePicture">
//                                     <Form.Label>Profile Picture</Form.Label>
//                                     <Form.Control type="text" name="profilePicture" value={formData.profilePicture} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formCity">
//                                     <Form.Label>City</Form.Label>
//                                     <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formJobPreferences">
//                                     <Form.Label>Job Preferences</Form.Label>
//                                     <Form.Control type="text" name="jobPreferences" value={formData.jobPreferences} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formAlumniDetails">
//                                     <Form.Label>Alumni Details</Form.Label>
//                                     <Form.Control type="text" name="alumniDetails" value={formData.alumniDetails} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formPreviousExperiences">
//                                     <Form.Label>Previous Experiences</Form.Label>
//                                     <Form.Control type="text" name="previousExperiences" value={formData.previousExperiences} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Form.Group controlId="formCv">
//                                     <Form.Label>CV</Form.Label>
//                                     <Form.Control type="text" name="cv" value={formData.cv} onChange={handleChange} />
//                                 </Form.Group>

//                                 <Button variant="primary" type="submit" className="mt-3">
//                                     Update Profile
//                                 </Button>
//                             </Form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateProfile;
///////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Newnavbar from './Newnavbar';

const UpdateProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
        phoneNumber: '',
        education: '',
        gender: '',
        profilePicture: '',
        city: '',
        jobPreferences: '',
        alumniDetails: '',
        previousExperiences: '',
        cv: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch profile data
        fetch('http://localhost:5001/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => setFormData(data))
            .catch(error => {
                console.error('Error fetching profile:', error);
                setErrorMessage('Failed to fetch profile data');
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5001/updateProfile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('token')
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                setSuccessMessage(data.message);
            })
            .catch(error => {
                console.error('Error updating profile:', error);
                setErrorMessage('Failed to update profile');
            });
    };

    return (
        <div>
            <Newnavbar />
            <div className="mt-5 row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="mb-4">Update Profile</h2>
                            {successMessage && <Alert variant="success">{successMessage}</Alert>}
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formDateOfBirth">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formEducation">
                                    <Form.Label>Education</Form.Label>
                                    <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formProfilePicture">
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control type="text" name="profilePicture" value={formData.profilePicture} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formJobPreferences">
                                    <Form.Label>Job Preferences</Form.Label>
                                    <Form.Control type="text" name="jobPreferences" value={formData.jobPreferences} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formAlumniDetails">
                                    <Form.Label>Alumni Details</Form.Label>
                                    <Form.Control type="text" name="alumniDetails" value={formData.alumniDetails} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formPreviousExperiences">
                                    <Form.Label>Previous Experiences</Form.Label>
                                    <Form.Control type="text" name="previousExperiences" value={formData.previousExperiences} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formCv">
                                    <Form.Label>CV</Form.Label>
                                    <Form.Control type="text" name="cv" value={formData.cv} onChange={handleChange} />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-3">
                                    Update Profile
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
