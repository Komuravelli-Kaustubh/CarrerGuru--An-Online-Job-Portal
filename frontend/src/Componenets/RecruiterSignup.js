import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Signinpage from './Signinpage';
import RecruiterSignIn from './RecruiterSignin';

const RecruiterSignUp = () => {
    const navigate=useNavigate();
    // State variables to store form input values
    const [companyName, setCompanyName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with the form data
        const Rsignup = {
            companyName,
            username,
            email,
            password,
        };

        // Now you can send the formData to your API using the POST method
        // For example:
        fetch('http://localhost:5001/Rreg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": true,
            },
            body: JSON.stringify(Rsignup),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.error == "User Exists") {
                    alert("User already exists")
                    // flag = 0;
                }
                // navigate(Signinpage);
                console.log("this is data"+data);
                console.log(data.authtoken);
                localStorage.setItem('RToken',data.authtoken);
                console.log('rSign up succesfull!');
                console.log(data, "userRegister");
                
                // Clear the form input values by setting state variables to empty strings
                setCompanyName('');
                setUsername('');
                setEmail('');
                setPassword('');
                
                navigate('/RmakeProfile');
                // navigate('/RecruiterSignIn')
            })
            .catch((error) => {
                // Handle any errors if the API call fails
            });
    };
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
            />

            <style>
                {`
          body {
            background-image: url("https://img.freepik.com/premium-photo/blank-sign-empty-chair-hiring-new-job-vacancy-concept-d-rendering_601748-4880.jpg");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            height: 100vh;
          }
          .card {
            background-color: rgba(52, 58, 64, 0.9);
          }
        `}
            </style>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Recruiter Sign Up</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="companyName" className="form-label">Company Name</label>
                                        <input type="text" className="form-control" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                                    <p className="text-center mt-3">Already have an account? <a href="/RecruiterSignIn">Sign In</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecruiterSignUp;
