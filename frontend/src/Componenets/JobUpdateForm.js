import React, { useState } from 'react';

const JobUpdateForm = ({ job, setJobs, setSelectedJob, handleCloseModal }) => {
    const [updatedJobData, setUpdatedJobData] = useState({ ...job });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedJobData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5001/updateRjob/${job._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': localStorage.getItem('RToken')
                },
                body: JSON.stringify(updatedJobData)
            });
            if (!response.ok) {
                throw new Error('Failed to update job');
            }
            // Update the jobs state with the updated job details
            setJobs(prevJobs => prevJobs.map(prevJob => {
                if (prevJob._id === job._id) {
                    return { ...prevJob, ...updatedJobData };
                }
                return prevJob;
            }));
            // alert('Update done!');
            handleCloseModal(); // Close the modal
        } catch (error) {
            console.error('Error updating job:', error);
        }
    };

    return (
        <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>View Details</h2>
            <form onSubmit={handleSubmit}>
                {/* Form inputs for updating job details */}
                <div className="form-group">
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" name="companyName" value={updatedJobData.companyName} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="postName">Post Name:</label>
                    <input type="text" name="postName" value={updatedJobData.postName} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="jobLocation">Job Location:</label>
                    <input type="text" name="jobLocation" value={updatedJobData.jobLocation} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Experience:</label>
                    <input type="text" name="experience" value={updatedJobData.experience} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="jobTiming">Job Timing:</label>
                    <input type="text" name="jobTiming" value={updatedJobData.jobTiming} onChange={handleChange} className="form-control" />
                    {/* <select name="jobTiming" value={updatedJobData.jobTiming} onChange={handleChange} className="form-control">
                        <option value="">Select Job Timing</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Temporary">Temporary</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                    </select> */}
                </div>
                <div className="form-group">
                    <label htmlFor="levelOfRequirement">Requirement:</label>
                    <input type="text" name="levelOfRequirement" value={updatedJobData.levelOfRequirement} onChange={handleChange} className="form-control" />
                    {/* <select name="levelOfRequirement" value={updatedJobData.levelOfRequirement} onChange={handleChange} className="form-control">
                        <option value="">Select Requirement</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Non-Urgent">Non-Urgent</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior Level">Senior Level</option>
                        <option value="Director">Director</option>
                    </select> */}
                </div>
                <div className="form-group">
                    <label htmlFor="datePosted">Date Posted:</label>
                    <input type="date" name="datePosted" value={updatedJobData.datePosted} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="offeredSalary">Offered Salary:</label>
                    <input type="text" name="offeredSalary" value={updatedJobData.offeredSalary} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="expiration">Expiration:</label>
                    <input type="date" name="expiration" value={updatedJobData.expiration} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="genderRequirement">Gender Requirement:</label>
                    <input type="text" name="genderRequirement" value={updatedJobData.genderRequirement} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="qualificationRequired">Qualifications Required:</label>
                    <input type="text" name="qualificationRequired" value={updatedJobData.qualificationRequired} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="companyLink">Company Link:</label>
                    <input type="text" name="companyLink" value={updatedJobData.companyLink} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="jobDescription">Job Description:</label>
                    <input type="text" name="jobDescription" value={updatedJobData.jobDescription} onChange={handleChange} className="form-control" />
                </div>
                {/* Add more input fields for other job details */}
                <button type="submit" className="my-3 btn btn-primary"><i class="fa-solid fa-file-pen"></i>  Update</button>
            </form>
        </div>
    );
};

export default JobUpdateForm;
