

import React, { useState } from 'react';
// import Newnavbar from "./Newnavbar";
import {useNavigate} from 'react-router-dom'
// import { cloneUniformsGroups } from 'three';

const Makeprof = () => {
    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
        phoneNumber: '',
        education: '',
        gender: 'Male',
        hobbies: [],
        profilePicture: null,
        city: '',
        jobPreferences: '',
        alumniDetails: '',
        previousExperiences: '',
        cv: null,
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? (checked ? [...prevFormData.hobbies, value] : prevFormData.hobbies.filter(hobby => hobby !== value)) : type === 'file' ? files[0] : value,
        }));
    };

    // Function to handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Here, you can perform your API call or data handling
    //         console.log(formData);

    //         // Create a new FormData object to send the form data as multipart/form-data
    //         const formDataToSend = new FormData();
    //         formDataToSend.append('name', formData.name);
    //         formDataToSend.append('email', formData.email);
    //         formDataToSend.append('dateOfBirth', formData.dateOfBirth);
    //         formDataToSend.append('phoneNumber', formData.phoneNumber);
    //         formDataToSend.append('education', formData.education);
    //         formDataToSend.append('gender', formData.gender);
    //         formDataToSend.append('hobbies', formData.hobbies.join(', ')); // Join hobbies as a comma-separated string
    //         formDataToSend.append('profilePicture', formData.profilePicture);
    //         formDataToSend.append('city', formData.city);
    //         formDataToSend.append('jobPreferences', formData.jobPreferences);
    //         formDataToSend.append('alumniDetails', formData.alumniDetails);
    //         formDataToSend.append('previousExperiences', formData.previousExperiences);
    //         formDataToSend.append('cv', formData.cv);
    //         console.log(formDataToSend);
    //         // Send the form data to your desired route using an HTTP request
    //         const response = await fetch('http://localhost:5001/makeprofile', {
    //             method: 'POST',
    //             body: formDataToSend,
    //         });

    //         // Handle the response from the server (if needed)
    //         const data = await response.json();
    //         console.log(data);

    //         if(response.status==200){
    //             alert("Profile Created Successfully");
    //             navigate('/ViewJobSeekers');
    //         }

    //         // Reset the form after successful submission
    //         setFormData({
    //             name: '',
    //             email: '',
    //             dateOfBirth: '',
    //             phoneNumber: '',
    //             education: '',
    //             gender: 'Male',
    //             hobbies: [],
    //             profilePicture: null,
    //             city: '',
    //             jobPreferences: '',
    //             alumniDetails: '',
    //             previousExperiences: '',
    //             cv: null,
    //         });

    //         // Scroll the page to the top
    //         window.scrollTo(0, 0);

    //         // Refresh the page after a short delay (500 milliseconds in this example)
    //         setTimeout(() => {
    //             window.location.reload();
    //         }, 500);

    //     } catch (error) {
    //         // Handle any errors that occurred during the request
    //         console.error('Error:', error);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001/makeprofile', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    "authtoken" : localStorage.getItem('token')
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

            alert("Profile Created Successfully");
            navigate('/Jobrecomm');

            setFormData({
                name: '',
                email: '',
                dateOfBirth: '',
                phoneNumber: '',
                education: '',
                gender: 'Male',
                hobbies: [],
                profilePicture: null,
                city: '',
                jobPreferences: '',
                alumniDetails: '',
                previousExperiences: '',
                cv: null,
            });
        } catch (error) {
            console.error('Error:', error.message);
            alert('Failed to create profile. Please try again later.');
        }
    };


    return (
        <div>
            {/* <Newnavbar /> */}
            <div className="container my-5">

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card" style={{
                            maxWidth: "800px",
                            margin: "50px auto",
                            padding: "20px",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"
                        }}>
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Make Your Profile</h2>
                                {/* User Image */}
                                <div className="text-center mb-4">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVE-LeGQfTup5pNp7IbUE8uvNJUtem355uUUG0j_1D5unRQs1iK8_RHsAS1SwZRqlwK8&usqp=CAU"
                                        //   {/* Replace 'your_user_image.jpg' with the path to your user image */}
                                        alt="User Profile"
                                        className="rounded-circle"
                                        width="150"
                                        height="150"
                                    />
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>



                                    <div className="form-group">
                                        <label htmlFor="cityLiving">City of Living</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cityLiving"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Enter your city of living"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="jobPostingCity">Job Posting City(s)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="jobPostingCity"
                                            name="jobPreferences"
                                            value={formData.jobPreferences}
                                            onChange={handleChange}
                                            placeholder="Enter job posting city(s)"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="dob">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="dob"
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Gender */}
                                    <div className=" bg-light p-3">
                                        <label className="d-block font-weight-bold text-decoration-underline">Gender</label>
                                        <br />
                                        <div className="form-check  float-left">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                id="male"
                                                name="gender"
                                                value="Male"
                                                checked={formData.gender === 'Male'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="male">Male</label>
                                        </div>

                                        <div className="form-check  float-left">
                                            <input
                                                type="radio"
                                                className="form-check-input tetx-left"
                                                id="female"
                                                name="gender"
                                                value="Female"
                                                checked={formData.gender === 'Female'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="female">Female</label>
                                        </div>
                                    </div>

                                    {/* Hobbies */}
                                    {/* <div className="form-group bg-light p-3">
                                        <label className="d-block font-weight-bold text-decoration-underline">Hobbies</label>
                                        <br />
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input text-left"
                                                id="dancing"
                                                name="hobbies"
                                                value="Dancing"
                                                checked={formData.hobbies.includes('Dancing')}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label text-left" htmlFor="dancing">Dancing</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="swimming"
                                                name="hobbies"
                                                value="Swimming"
                                                checked={formData.hobbies.includes('Swimming')}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="swimming">Swimming</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="sports"
                                                name="hobbies"
                                                value="Sports"
                                                checked={formData.hobbies.includes('Sports')}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="sports">Sports</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="movies"
                                                name="hobbies"
                                                value="Watching Movies"
                                                checked={formData.hobbies.includes('Watching Movies')}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="movies">Watching Movies/Content Creation</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="readingBooks"
                                                name="hobbies"
                                                value="Reading Books"
                                                checked={formData.hobbies.includes('Reading Books')}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="readingBooks">Reading Books</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="videoGames"
                                                name="hobbies"
                                                value="Playing Video Games"
                                                checked={formData.hobbies.includes('Playing Video Games')}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="videoGames">Playing Video Games</label>
                                        </div>
                                    </div> */}
                                    <br />

                                    {/* <div className="form-group mt-3">
                                        <label htmlFor="otherHobby">Any Other Hobby</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="otherHobby"
                                            name="otherHobby"
                                            value={formData.otherHobby}
                                            onChange={handleChange}
                                            placeholder="Enter your other hobby"
                                        />
                                    </div> */}
                                    <br /><br />
                                    <div className="form-group">
                                        <label htmlFor="education">Education</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="education"
                                            name="education"
                                            value={formData.education}
                                            onChange={handleChange}
                                            placeholder="Enter your education"
                                        />
                                    </div>
                                    <br />

                                    <div className="form-group">
                                        <label htmlFor="alumni">Alumni Details</label>
                                        <textarea
                                            className="form-control"
                                            id="alumni"
                                            name="alumniDetails"
                                            value={formData.alumniDetails}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder="Enter your alumni details"
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="experiences">Past Internships/Experiences</label>
                                        <textarea
                                            className="form-control"
                                            id="experiences"
                                            name="previousExperiences"
                                            value={formData.previousExperiences}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder="Enter your past internships/experiences"
                                        ></textarea>
                                    </div>
                                    <br /><br />

                                    <div className="form-group">
                                        <label htmlFor="profileImage">Choose Profile Image</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            id="profileImage"
                                            name="profilePicture"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <br /><br />

                                    <div className="form-group">
                                        <label htmlFor="cvFile">Upload CV</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            id="cvFile"
                                            name="cv"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <br /><br />

                                    <button type="submit" className="btn btn-primary btn-block">
                                        UPDATE PROFILE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Makeprof;
