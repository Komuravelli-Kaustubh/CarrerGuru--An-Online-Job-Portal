import React from "react";

const Fiestsec = () => {
    return (

        <div>
            <div className="firstsec">
                <div className="container pb-3 ">
                    <div className="mb-5 pt-5">
                        <u style={{ color: "white" }}>

                            <h2 className="text-center text-white" style={{ fontFamily: "'Dancing Script', cursive;" }}>
                                Welcome back Jobseeker1!</h2>

                        </u>
                    </div>
                    <div
                        style={{ fontFamily: " 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 22px;" }}
                        className="text-white">
                        <ul>
                            <li><span>&#8594;</span>You chose the right portal for making your correct career choices.</li>
                            <li> <span>&#8594;</span>Career Guru is an efficient and trusted job-portal with 8 year experience.</li>
                            <li><span>&#8594;</span>Career Guru has helped over 2500+ Job applicants find their right Careers</li>
                            <li><span>&#8594;</span>Career Guru makes the right match for you accordng to your comforts</li>
                        </ul>
                    </div>
                    <div className=" text-center text-white" style={{fontSize:"19px"}}>
                        <i>---Forget your wories, coz Career Guru is here to lift your burdens to make your life easy---</i>
                    </div>
                </div><br /><br /><br /><br /><br />
                <div className="container-fluid ">
                    <div className="row text-white">
                        {/* <!-- <div className="main-skills d-flex justify-content-around align-items-stretch text-white "> --> */}
                        <div className="col-md-2 offset-md-1">

                            <div className="card toblend">
                                <img src="https://t4.ftcdn.net/jpg/03/22/28/87/360_F_322288739_iaikVrAQBGhxr0H3LjMaUokWCN43LkXu.jpg"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3>Increase your Salary Here</h3>
                                    <p>Career Guru helps you find your true worth</p>
                                    {/* <!-- <a href="#" className="btn btn-warning m-3" id="gt">Get Started</a> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-1">
                            <div className="card toblend">
                                <img src="https://th.bing.com/th/id/OIP.RXSiPuLkudKAgQLBvCoj_gHaDt?w=316&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
                                <div className="card-body toblend">
                                    <h3>Get Your Perfect Match Here</h3>
                                    <p>Perfect match means perfect work life balance</p>
                                    {/* <!-- <a href="#" className="btn btn-warning m-3" id="gt">Get Started</a> --> */}
                                </div>
                            </div>
                        </div>


                        <div className="col-md-2 offset-md-1">
                            <div className="card toblend">
                                <img src="https://cc-west-blog-assets.s3.amazonaws.com/uploads/2021/06/customer-satisfaction-tips-better-content-for-business-sucess-blog-1.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3>Customer satisfaction is our priority</h3>
                                    <p>More Than 2500 Satisfied Customers on our portal</p>
                                    {/* <!-- <a href="#" className="btn btn-warning m-3" id="gt">Get Started</a> --> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 offset-md-1">
                            <div className="card toblend ">
                                <img src="https://www.shutterstock.com/image-illustration/brown-stamp-most-trusted-260nw-570453349.jpg"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3>Most Trusted Portal..</h3>
                                    <p>With 8 years + Experience we are the most trusted portal</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- </div> --> */}


                    </div>
                </div>
            </div>
        </div>


    )
}

export default Fiestsec;