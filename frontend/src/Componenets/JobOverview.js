import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const JobOverview = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job data for the specified jobId from your API endpoint
    fetch(`/get_job/${jobId}`)
      .then(response => {
        setJob(response.data);
      })
      .catch(error => {
        console.error('Error fetching job:', error);
      });
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-md right_joboverview_over_click mt-2 me-0" id="job_overview" style={{ backgroundColor: "whitesmoke" }}>
      {/* Render job overview details using job data */}
      {/* You can use the same structure as in the commented out code you provided */}
    </div>
  );
};

export default JobOverview;
