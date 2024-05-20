import React from 'react';


const Carouselandsignup = () => {
    return (

        <div id="cas">
            <div className="row clearfix align-items-stretch">
                <div className="col-md">

                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="1500">
                                <img src="https://m.economictimes.com/thumb/msid-60916721,width-1200,height-900,resizemode-4,imgsize-170135/five-ways-to-build-a-rewarding-career.jpg" className="d-block w-100 img-fluid" alt="1st..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="1500">
                                <img
                                    src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/career-development-pillar-page-overview.png"
                                    className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="1500">
                                <img src="https://edumilestones.com/blog/images/career-choice-luck-or-logic.jpg" className="d-block w-100"
                                    alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="1500">
                                <img src="https://qph.cf2.quoracdn.net/main-qimg-79688a5d01ca22f7a43bbf901efbe143-lq" className="d-block w-100"
                                    alt="4th" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* <div className="col-md-3  overflow-auto text-center mt-3">
                    <div className="signup_detsils_container border border-dark mt-3 ms-0 pt-2 pb-5">
                        <h3>If new please <br />Sign Up:</h3><br /><br />
                        <div className="text-center">
                            <a href="#" className="btn btn-lg btn-success ms-3">Google</a><br /><br />
                            <a href="#" className="btn btn-lg btn-primary ms-3 me-2">Facebook</a><br /><br />
                            <a href="Signuppage" className="btn btn-lg btn-warning  text-primary ms-3">Create </a>
                        </div>
                    </div>
                </div> */}

            </div>
            <hr></hr>
            
        </div>

    )
}


export default Carouselandsignup;