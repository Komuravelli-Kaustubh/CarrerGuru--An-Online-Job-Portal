import React from 'react';

const FaqComponent = () => {
    return (
        <div className="accordion" id="accordionExample">
            <h3>FAQ's</h3>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        How do I create an account on the job portal?
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        To create an account, click on the "Sign Up" button on the homepage and follow the instructions. You'll need to provide basic information like your name, email address, and create a password.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        How can I search for job openings?
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        You can search for job openings using the search bar on the homepage. You can filter by job title, location, company, and various other criteria to find the most relevant opportunities.
                    </div>
                </div>
            </div>

            

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                        How do I apply for a job?
                    </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        Once you've found a job listing that interests you, click on the "Apply" button. You'll be prompted to submit your resume and cover letter, and you may need to fill out additional application questions or forms.
                    </div>
                </div>
            </div>

            
            
        </div>
    );
};

export default FaqComponent;