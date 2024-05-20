import React from "react";
import Newnavbar from "./Newnavbar";

const Savedjobs = () => {
    return (
        <div>
            <Newnavbar/>

            <div className="container-fluid p-0 m-0 me-0" style={{ backgroundColor: "aliceblue" }}>
                <div className="holder row">
                    <div className="leftsearch col-md-2 ms-3" style={{backgroundColor:"whitesmoke"}}>
                        <div className="search_box mb-4">
                            <div className="nest1 row ">
                                <h4>Search using keywords: </h4>
                            </div>

                            <div className="mt-2">
                                <i className="fa-solid fa-magnifying-glass"></i> <input type="text" style={{width:"80%"}}
                                    placeholder=" Job Description, Company name" />
                            </div>
                        </div>


                        <div className="Job_location_search mt-5">
                            <div className="nest1 row ">
                                <h4>Job Location: </h4>
                            </div>

                            <div className="mt-2 d-flex flex-row">
                                <i className="fa-solid fa-location-pin-lock me-3"></i>
                                <div className="dropdown">
                                    <a className="btn bg-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Job Location
                                    </a>

                                    <ul className="dropdown-menu dropdown-menu-white ">
                                        <li><a className="dropdown-item bg-white" href="#">New Delhi</a></li>
                                        <li><a className="dropdown-item bg-white" href="#">Mumbai</a></li>
                                        <li><a className="dropdown-item bg-white" href="#">Madras</a></li>
                                        <li><a className="dropdown-item bg-white" href="#">Indore</a></li>
                                        <li><a className="dropdown-item bg-white" href="#">Bhopal</a></li>
                                        <li><a className="dropdown-item bg-white" href="#">Amritsar</a></li>
                                        <li><a className="dropdown-item bg-white" href="#">Bangalore</a></li>
                                        <li><a className="dropdown-item bg-white" href="#">Roorkee</a></li>
                                        <li><a className="dropdown-item bg-white" href="#">kochi</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="jobparameters mt-5">
                            <h4>Job Type:</h4>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Full Time
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    checked />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Freelancer
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    checked />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Part Time
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Internship
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    checked />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Temperory
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="jobposting col-md-7 ms-2 ">


                        <div className="row p-3 m-2 job6 mb-3" style={{borderRadius:"4%", backgroundColor:"whitesmoke"}}>
                            <div className="row logoandotherdetails">
                                <div className="col-md-2"><img className="rounded-circle"
                                    src="https://img.freepik.com/premium-vector/old-vintage-anchor_225004-2213.jpg?w=2000"
                                    style={{width:"100%"}} />
                                </div>
                                <div className="company_name col">
                                    <div className="d-flex flex-row m-0 p-0">
                                        <h3>Aquafire Merchant Navy</h3>
                                        <div className="save" style={{marginLeft:"auto"}}>
                                            <button className="btn" > <i className="fa-solid fa-bookmark"></i></button>
                                        </div>
                                        {/* <!-- <div className="btn bg-primary mt-2 text-white" style="margin-left:auto">Click Here</div> --> */}
                                    </div>
                                    <div className="row jobdetails">
                                        <div className="d-flex flex-row">
                                            <div className="sector me-2">
                                                <i className="fa-solid fa-briefcase jobdescription"></i>Engine Motorist
                                            </div>
                                            <div className="location me-3">
                                                <i className="fa-solid fa-location-dot  location"></i>goa
                                            </div>
                                            <div className="companyexperience me-3">
                                                <i className="fa-solid fa-users"></i>8 yr Experience
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="availability row">
                                <div className="d-flex flex-row ms-5">
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{borderRadius:"15%",backgroundColor: "rgb(175, 129, 208)"}}>Full time</div>
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{borderRadius:"15%",backgroundColor:"rgb(242, 170, 36)"}}>Urgent</div>
                                    <a className="btn btn-primary mt-2 text-white" href="#job_overview" style={{marginLeft:"auto"}}>Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md right_joboverview_over_click mt-2 me-0" id="job_overview" style={{backgroundColor:"whitesmoke"}}>
                        <div className="text-center">
                            <h4><i className="fa-solid fa-book-open-reader"></i>Job Overview:</h4>
                        </div>

                        <div className="row overview-2 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-regular fa-calendar-days" style={{height:"100%"}}></i>
                            </div>
                            <div className="col-md-7">
                                <b>Date Posted</b> <br />
                                22 March 2022
                            </div>
                        </div>

                        <div className="row overview-3 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="col-md-7">
                                <b>Job Location</b> <br />
                                Goa
                            </div>
                        </div>

                        <div className="row overview-4 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-solid fa-money-bills"></i>
                            </div>
                            <div className="col-md-7">
                                <b>Offered Salary</b> <br />
                                25 Lpa
                            </div>
                        </div>

                        <div className="row overview-5 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-solid fa-hourglass-end"></i>
                            </div>
                            <div className="col-md-7">
                                <b>Expiration</b> <br />
                                22 June 2022
                            </div>
                        </div>

                        <div className="row overview-6 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-solid fa-person"></i>/<i className="fa-solid fa-person-dress"></i>
                            </div>
                            <div className="col-md-7">
                                <b>Gender</b> <br />
                                Male
                            </div>
                        </div>

                        <div className="row overview-7 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-solid fa-user-graduate"></i>
                            </div>
                            <div className="col-md-7">
                                <b>Qualification</b><br />
                                Metric Pass
                            </div>
                        </div>

                        <div className="row overview-8 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-solid fa-link"></i>
                            </div>
                            <div className="col-md-7">
                                <b>Company Contact Details</b><br />
                                <a href="https://www.facebook.com" target="_blank">zgszdkhkzhg.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Savedjobs;