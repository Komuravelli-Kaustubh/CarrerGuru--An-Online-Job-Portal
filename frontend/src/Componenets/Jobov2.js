import React from "react";

const Jobov2 = () => {
    return (
        <div>
            <div className="row overview-2 m-2 p-3">
                <div className="col-md-3">
                    <i className="fa-regular fa-calendar-days" style={{ height: "100%;" }}></i>
                </div>
                <div className="col-md-7">
                    <b>Date Posted</b> <br />
                    11 September 2022
                </div>
            </div>

            <div className="row overview-3 m-2 p-3">
                <div className="col-md-3">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-md-7">
                    <b>Job Location</b> <br />
                    New York
                </div>
            </div>

            <div className="row overview-4 m-2 p-3">
                <div className="col-md-3">
                    <i className="fa-solid fa-money-bills"></i>
                </div>
                <div className="col-md-7">
                    <b>Offered Salary</b> <br />
                    12 Lpa
                </div>
            </div>

            <div className="row overview-5 m-2 p-3">
                <div className="col-md-3">
                    <i className="fa-solid fa-hourglass-end"></i>
                </div>
                <div className="col-md-7">
                    <b>Expiration</b> <br />
                    22 November 2022
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
                    <b>Qualification Required</b>
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
            </div>
        </div>
    )
}

export default Jobov2;