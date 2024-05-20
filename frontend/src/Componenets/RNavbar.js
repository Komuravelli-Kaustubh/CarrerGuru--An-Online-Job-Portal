// import React from 'react';

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         {/* Brand/logo */}
//         <a className="navbar-brand" >
//           CareerGuru
//         </a>

//         {/* Collapse button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="/ViewJobSeekers">
//                 View Jobseekers
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/post-job">
//                 Post a Job
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/make-blog">
//                 Make a Blog
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
// ///////////////////////////////////////////////////////////////
// import React from 'react';

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         {/* Brand/logo */}
//         <a className="navbar-brand" >
//           CareerGuru
//         </a>

//         {/* Collapse button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="/RmakeProfile">
//                 <i className="fas fa-user"></i> Make Profile
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/ViewJobSeekers">
//                 <i className="fas fa-users"></i> Jobseekers Profile
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/blog">
//                 <i className="fas fa-file-alt"></i> Blog
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/PostJobs">
//                 <i className="fas fa-briefcase"></i> Post Jobs
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/RActivity">
//                 <i className="fas fa-briefcase"></i> Activity
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Right-aligned navigation links */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="/RProfile">
//                 <i className="fas fa-user-circle"></i> View Profile
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 <i className="fas fa-sign-out-alt"></i> Sign Out
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
///////////////////////////////////////////////////////////////////////////////////////

import React from 'react';

const NavBar = () => {
  let handleLogOut=()=>{
    localStorage.removeItem('RToken');
    localStorage.removeItem('companyUserName');
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Brand/logo */}
        <a className="navbar-brand" href="#">
          CareerGuru
        </a>

        {/* Collapse button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link" href="/RmakeProfile">
              <i class="fa-solid fa-address-card"></i> Make Profile
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/UpdateRProfile">
              <i class="fa-solid fa-address-card"></i> Update Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ViewJobSeekers">
                <i className="fas fa-users"></i> Jobseekers Profile
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/blog">
                <i className="fas fa-file-alt"></i> Blog
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/PostJobs">
                <i className="fas fa-briefcase"></i> Post Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/RActivity">
                <i className="fas fa-chart-line"></i> Activity
              </a>
            </li>
          </ul>

          {/* Right-aligned navigation links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/RProfile">
                <i className="fas fa-user-circle"></i> View Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleLogOut} >
                <i className="fas fa-sign-out-alt"></i> Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
