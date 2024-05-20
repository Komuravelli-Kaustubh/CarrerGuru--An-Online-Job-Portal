import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="container-fluid">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32">
                            {/* <use xlink:href="#bootstrap" /> */}
                        </svg>
                        <span class="fs-4 text-primary">
                            {/* <!-- <div style="font-size:65px;">Career Guru</div> --> */}
                            <h1>Career Guru</h1>
                        </span>
                    </a>

                    <ul class="nav nav-pills">


                        <li class="nav-item"><a href="#features" class="nav-link">Features</a></li>


                        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                        <div class="btn btn-warning mx-2">
                            <li class="nav-item"><a href="/Signinpage" class="nav-link ">Log In</a></li>
                        </div>
                        {/* <div class="btn btn-primary text-white">
                            <li class="nav-item"><a href="#" class="nav-link ">POST JOB</a></li>
                        </div> */}
                        <li className="nav-item mx-2">
                            <a href="/RecruiterSignup" className="btn btn-primary p-3">
                                POST JOB
                            </a>
                        </li>
                       
                    </ul>

                </header>
            </div>
        </div>




    )
}

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <a href="/" className="navbar-brand">
//           <span className="fs-4 text-primary">Career Guru</span>
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#about" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="/Signinpage" className="btn btn-primary me-2">
//                 Log In
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="btn btn-warning">
//                 POST JOB
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

