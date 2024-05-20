import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signinpage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5001/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    console.log(data);

    try {
      if (data.success) {
        // Store the user's email in sessionStorage
        sessionStorage.setItem('userEmail', credentials.email);
        localStorage.setItem('token', data.authtoken);
        console.log("This is authtoken : ", data.authtoken);
        navigate('/Jobrecomm');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const onChange = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', color: 'black' }}>
      <div className="container-fluid">
        <div className="row mt-5 py-3">
          <div className="col-md">
            {/* <img
              src="https://publictrainingcenters.com/img/login-img.png"
              alt="photograph"
              className="img-fluid"
              style={{ height: '600px' }}
            /> */}
          </div>

          <div className="col-md-3 my-5 mb-5">
            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <h3 style={{ color: 'black' }}>Sign In:</h3>
                <br />
                <br />
              </div>
              <b>Email*</b>
              <br />
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="rando@gmail.com"
                aria-label="default input example"
                required
                value={credentials.email}
                onChange={onChange}
                style={{ color: 'black' }}
              />
              <br />
              <br />
              <b>Password:*</b>
              <br />
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="******"
                aria-label="default input example"
                required
                value={credentials.password}
                onChange={onChange}
                style={{ color: 'black' }}
              />
              <br />
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <br />
                <br />
                <br />
                <fieldset>
                  <br />
                  <br />
                  <Link to="/Signuppage" style={{ color: 'black' }}>If new, please Sign Up</Link>
                  <br/><br/>
                  <Link to="/" style={{color : 'black'}}>Go Back</Link>
                </fieldset>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
