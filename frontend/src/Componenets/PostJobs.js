import React, { useState } from 'react';
import RNavbar from './RNavbar';

const PostJobs = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        postName: '',
        jobLocation: '',
        experience: '',
        jobTiming: 'Full time',
        levelOfRequirement: 'Urgent',
        datePosted: '',
        offeredSalary: '',
        expiration: '',
        genderRequirement: '',
        qualificationRequired: '',
        companyLink: '',
        jobDescription: '',
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
            const response = await fetch('http://localhost:5001/postjobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmFjYjhjYWEyN2FhYmNjYzMyNTMwIn0sImlhdCI6MTcxNTYxOTM5MX0.7IGyeoPnNVhp7KhkFLEWhIt3pbFYzPvS9lRxxH7Lb58"
                    "authtoken": localStorage.getItem('RToken')
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Job posted successfully!');
                // Reset the form data after successful submission
                setFormData({
                    companyName: '',
                    postName: '',
                    jobLocation: '',
                    experience: '',
                    jobTiming: 'Full time',
                    levelOfRequirement: 'Urgent',
                    datePosted: '',
                    offeredSalary: '',
                    expiration: '',
                    genderRequirement: '',
                    qualificationRequired: '',
                    companyLink: '',
                    jobDescription: '',
                });
            } else {
                console.error('Error posting job:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div
            className="container py-4"
            style={{
                backgroundImage:
                    'url(https://img.freepik.com/free-photo/flat-lay-black-background-with-laptop-coffee-cup-calculator-top-view_169016-33508.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(240, 240, 240, 0.8)',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <RNavbar />
            <div className="container py-4" >
                <h1 className="text-center mb-4" style={{ color: 'white' }}>
                    Post Job.....
                </h1>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card p-4" style={{ border: '1px solid #ccc', backgroundColor: '#fff', borderRadius: '10px' }}>
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
                                <div className="form-group">
                                    <label htmlFor="postName">Post Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="postName"
                                        name="postName"
                                        value={formData.postName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jobLocation">Job Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="jobLocation"
                                        name="jobLocation"
                                        value={formData.jobLocation}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="experience">Experience</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jobTiming">Job Timing</label>
                                    <select
                                        className="form-control"
                                        id="jobTiming"
                                        name="jobTiming"
                                        value={formData.jobTiming}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Full time">Full time</option>
                                        <option value="Freelancer">Freelancer</option>
                                        <option value="Part time">Part time</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Temporary">Temporary</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="levelOfRequirement">Level of Requirement</label>
                                    <select
                                        className="form-control"
                                        id="levelOfRequirement"
                                        name="levelOfRequirement"
                                        value={formData.levelOfRequirement}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Urgent">Urgent</option>
                                        <option value="Non Urgent">Non Urgent</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="datePosted">Date Posted</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="datePosted"
                                        name="datePosted"
                                        value={formData.datePosted}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="offeredSalary">Offered Salary</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="offeredSalary"
                                        name="offeredSalary"
                                        value={formData.offeredSalary}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="expiration">Expiration</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="expiration"
                                        name="expiration"
                                        value={formData.expiration}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="genderRequirement">Gender Requirement</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="genderRequirement"
                                        name="genderRequirement"
                                        value={formData.genderRequirement}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="qualificationRequired">Qualification Required</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="qualificationRequired"
                                        name="qualificationRequired"
                                        value={formData.qualificationRequired}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyLink">Company Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyLink"
                                        name="companyLink"
                                        value={formData.companyLink}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jobDescription">Job Description</label>
                                    <textarea
                                        className="form-control"
                                        id="jobDescription"
                                        name="jobDescription"
                                        value={formData.jobDescription}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                                    Post Job
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostJobs;
