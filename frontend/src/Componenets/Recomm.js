import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Recomm = () => {
    return (
        <div style={{ backgroundColor: "aliceblue" }}>
            <div className="container m-3 p-3 text-center" >
                <h2 className="text-center">Find Your Jobs Here:</h2>
                <small className="text-center">Jobs-Page/Career Guru</small>
            </div>
            <hr />
            <div className="container-fluid p-0 m-0 me-0">
                <div className= "holder row">
                    <div className="leftsearch col-md-2 ms-3" style={{ backgroundColor: "whitesmoke" }}>
                        <div className="search_box mb-4">
                            <div className="nest1 row ">
                                <h4>Search using keywords: </h4>
                            </div>

                            <div className="mt-2">
                                <i className="fa-solid fa-magnifying-glass"></i> <input type="text" style={{ width: "80%" }}
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

                        <div className="row p-3 m-2  job1  mb-3" style={{ borderRadius: "4%;", backgroundColor: "whitesmoke" }}>
                            <div className="row logoandotherdetails">
                                <div className="col-md-2"><img
                                    src="https://i.pinimg.com/736x/08/18/2d/08182d735aacc66da3b961c06efbfde5.jpg "
                                    className="img-fluid rounded-circle" style={{ width: "100%;", height: "100%" }} />
                                </div>
                                <div className="company_name col">
                                    <div className="d-flex flex-row">
                                        <h3>Bingeit Corporations</h3>
                                        <i className="fa-regular fa-bookmark btn" style={{ marginLeft: "auto;" }}></i>
                                    </div>
                                    <div className="row jobdetails">
                                        <div className="d-flex flex-row">
                                            <div className="sector me-2">
                                                <i className="fa-solid fa-briefcase jobdescription"></i>Product Designer
                                            </div>
                                            <div className="location me-3">
                                                <i className="fa-solid fa-location-dot  location"></i>Madras
                                            </div>
                                            <div className="companyexperience me-3">
                                                <i className="fa-solid fa-users"></i>12yr Experience
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="availability row">
                                <div className="d-flex flex-row ms-5">
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(175, 129, 208)" }}>Full time</div>
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(242, 170, 36)" }}>Urgent</div>
                                    <div className="btn bg-primary mt-2 text-white" href="#job_overview" style={{ marginLeft: "auto" }}><Link to="/">Click Here</Link></div>
                                </div>
                            </div>
                        </div>


                        <div className="row p-3 m-2  job2  mb-3" style={{ borderRadius: "4%", backgroundColor: "whitesmoke" }}>
                            <div className="row logoandotherdetails">
                                <div className="col-md-2"><img
                                    src="https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/000004954png_0.PNG "
                                    className="img-fluid rounded-circle" style={{ width: "100%", height: "100%" }} />
                                </div>
                                <div className="company_name col">
                                    <div className="d-flex flex-row">
                                        <h3>Goodwill Engines</h3>
                                        <i className="fa-regular fa-bookmark btn" style={{ marginLeft: "auto;" }}></i>
                                    </div>
                                    <div className="row jobdetails">
                                        <div className="d-flex flex-row">
                                            <div className="sector me-2">
                                                <i className="fa-solid fa-briefcase jobdescription"></i>Engine Designer
                                            </div>
                                            <div className="location me-3">
                                                <i className="fa-solid fa-location-dot  location"></i>Madras
                                            </div>
                                            <div className="companyexperience me-3">
                                                <i className="fa-solid fa-users"></i>22yr Experience
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="availability row">
                                <div className="d-flex flex-row ms-5">
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: " rgb(175, 129, 208)" }}>Full time</div>
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(242, 170, 36)" }}>Urgent</div>
                                    <div className="btn bg-primary mt-2 text-white" style={{ marginLeft: "auto" }}>Click Here</div>
                                </div>
                            </div>
                        </div>

                        <div className="row p-3 m-2  job3  mb-3" style={{ borderRadius: "4%", backgroundColor: "whitesmoke" }}>
                            <div className="row logoandotherdetails">
                                <div className="col-md-2"><img src="https://i.ytimg.com/vi/hBAuIzZttP4/hqdefault.jpg"
                                    className="rounded-circle" style={{ width: "100%" }} />
                                </div>
                                <div className="company_name col">
                                    <div className="d-flex flex-row">
                                        <h3>Axes Development</h3>
                                        <i className="fa-regular fa-bookmark btn" style={{ marginLeft: "auto;" }}></i>
                                    </div>
                                    <div className="row jobdetails">
                                        <div className="d-flex flex-row">
                                            <div className="sector me-2">
                                                <i className="fa-solid fa-briefcase jobdescription"></i>Senior Manager
                                            </div>
                                            <div className="location me-3">
                                                <i className="fa-solid fa-location-dot  location"></i>Indore
                                            </div>
                                            <div className="companyexperience me-3">
                                                <i className="fa-solid fa-users"></i>6yr Experience
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="availability row">
                                <div className="d-flex flex-row ms-5">
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(175, 129, 208)" }}>Full time</div>
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(242, 170, 36)" }}>Urgent</div>
                                    <div className="btn bg-primary mt-2 text-white" style={{ marginLeft: "auto" }}>Click Here</div>
                                </div>
                            </div>
                        </div>

                        <div className="row p-3 m-2 job4  mb-3" style={{ borderRadius: "4%", backgroundColor: "whitesmoke" }}>
                            <div className="row logoandotherdetails">
                                <div className="col-md-2"><img src="https://cdn.mos.cms.futurecdn.net/LUpDXbnJmZ6zAy3CYwFrk.jpg"
                                    className="rounded-circle" style={{ width: "100%" }} />
                                </div>
                                <div className="company_name col">
                                    <div className="d-flex flex-row">
                                        <h3>Connecting Us</h3>
                                        <i className="fa-regular fa-bookmark btn" style={{ marginLeft: "auto" }}></i>
                                    </div>
                                    <div className="row jobdetails">
                                        <div className="d-flex flex-row">
                                            <div className="sector me-2">
                                                <i className="fa-solid fa-briefcase jobdescription"></i>Data Scientist
                                            </div>
                                            <div className="location me-3">
                                                <i className="fa-solid fa-location-dot  location"></i>Bangalore
                                            </div>
                                            <div className="companyexperience me-3">
                                                <i className="fa-solid fa-users"></i>10yr Experience
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="availability row">
                                <div className="d-flex flex-row ms-5">
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(175, 129, 208)" }}>Full time</div>
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(242, 170, 36)" }}>Urgent</div>
                                    <div className="btn bg-primary mt-2 text-white" style={{ marginLeft: "auto" }}>Click Here</div>
                                </div>
                            </div>
                        </div>

                        <div className="row p-3 m-2 job5 mb-3" style={{ borderRadius: "4%", backgroundColor: "whitesmoke" }}>
                            <div className="row logoandotherdetails">
                                <div className="col-md-2"><img className="rounded-circle"
                                    src="https://img.freepik.com/premium-vector/law-firm-lawyer-services-luxury-vintage-crest-logo_9857-242.jpg?w=2000"
                                    style={{ width: "100%" }} />
                                </div>
                                <div className="company_name col">
                                    <div className="d-flex flex-row">
                                        <h3>Vallaha Law Firm</h3>
                                        <i className="fa-regular fa-bookmark btn" style={{ marginLeft: "auto;" }}></i>
                                    </div>
                                    <div className="row jobdetails">
                                        <div className="d-flex flex-row">
                                            <div className="sector me-2">
                                                <i className="fa-solid fa-briefcase jobdescription"></i>Labour Law Advisor
                                            </div>
                                            <div className="location me-3">
                                                <i className="fa-solid fa-location-dot  location"></i>New Delhi
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
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(175, 129, 208)" }}>Full time</div>
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "15%", backgroundColor: "rgb(242, 170, 36)" }}>Urgent</div>
                                    <div className="btn bg-primary mt-2 text-white" style={{ marginLeft: "auto" }}>Click Here</div>
                                </div>
                            </div>
                        </div>

                        <div className="row p-3 m-2 job6 mb-3" style={{ borderRadius: "4%", backgroundColor: "whitesmoke" }}>
                            <div className="row logoandotherdetails">
                                <div className="col-md-2"><img className="rounded-circle"
                                    src="https://img.freepik.com/premium-vector/old-vintage-anchor_225004-2213.jpg?w=2000"
                                    style={{ width: "100%" }} />
                                </div>
                                <div className="company_name col">
                                    <div className="d-flex flex-row m-0 p-0">
                                        <h3>Aquafire Merchant Navy</h3>
                                        <div className="save" style={{ marginLeft: "auto" }}>
                                            <button className="btn" > <i className="fa-solid fa-bookmark"></i></button>
                                        </div>

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
                                        style={{ borderRadius: "25px", backgroundColor: "rgb(175, 129, 208)" }}>Full time</div>
                                    <div className="  p-2 mt-2 me-4 border border-dark text-white"
                                        style={{ borderRadius: "25px", backgroundColor: "rgb(242, 170, 36)" }}>Urgent</div>
                                    <a className="btn btn-primary mt-2 text-white" href="#job_overview" style={{ marginLeft: "auto" }}>Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md right_joboverview_over_click mt-2 me-0" id="job_overview" style={{ backgroundColor: "whitesmoke" }}>
                        <div className="text-center">
                            <h4><i className="fa-solid fa-book-open-reader"></i>Job Overview:</h4>
                        </div>
                        <Outlet/>

                        {/* <div className="row overview-2 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-regular fa-calendar-days" style={{ height: "100%;" }}></i>
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
                                Mumbai
                            </div>
                        </div>

                        <div className="row overview-4 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-solid fa-money-bills"></i>
                            </div>
                            <div className="col-md-7">
                                <b>Offered Salary</b> <br />
                                22 Lpa
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
                                Both
                            </div>
                        </div>

                        <div className="row overview-7 m-2 p-3">
                            <div className="col-md-3">
                                <i className="fa-solid fa-user-graduate"></i>
                            </div>
                            <div className="col-md-7">
                                <b>Qualification Required</b>(Elon Musk pun)<br />
                                None
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
                        </div> */}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Recomm;