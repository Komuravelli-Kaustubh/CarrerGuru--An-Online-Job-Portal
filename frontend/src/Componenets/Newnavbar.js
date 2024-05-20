import React from "react";
import { useNavigate } from 'react-router-dom';

const Newnavbar = () => {
    const navigate = useNavigate();

    function handleLogout(){
       localStorage.removeItem('token');

        // Navigate to "/"
        navigate('/');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark firstsec sticky-top ">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">
                        <h3 className="text-white">Career Guru</h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <a className="nav-link text-white" href="/Makeprof"><i class="fa-solid fa-id-card-clip"></i>Make Profile</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/UpdateProfile"><i class="fa-solid fa-id-card-clip"></i>Update Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/Jobrecomm"><i class="fa-solid fa-comment-medical"></i>Job Recommendations</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link text-white" href="/Savedjobs"><i class="fa-solid fa-floppy-disk"></i>Saved Jobs</a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="d-flex">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item me-3">
                                <a className="nav-link text-white" href="/Jobrecomm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                    </svg> Check Updates
                                </a>
                            </li> */}
                            <li className="nav-item me-3">
                                <a className="nav-link text-white" href="/Profile">
                                    <i className="fa-solid fa-user"></i> View Profile
                                </a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link text-white" href="/"  onClick={handleLogout}>
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Newnavbar;
