import React from 'react';
import { Component } from 'react';
import { useEffect, useState } from "react";
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';


const Signuppage = () => {
    const navigate = useNavigate();

    const mystyle1 = {
        border: "1px solid",
        borderRadius: "11px",
        padding: "2%",
        margin: "2%",
        height: "540px",
        position: "relative"
    }

    const mystyle2 = {
        color: "grey",
        textAlign: "center"
    }

    const mystyle3 = {
        padding: "1%",
        textAlign: "center"
    }

    const mystyle4 = {
        top: "14%",
        bottom: "1%",
        position: "relative"
    }
    // const [input, setInput] = useState({
    //     fname: "",
    //     email: "",
    //     password: "",
    // });
    const [fname, setFname] = useState(null);
    const [Email, setEmail] = useState(null);
    const [pwd, setPwd] = useState(null);

    // const inputHandler = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;

    //     setInput({
    //         ...input,
    //         [name]: value
    //     })
    // };

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(input);
    //     setInput({
    //         fname: "",
    //         email: "",
    //         password: "",
    //     })
    // }


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(fname, Email, pwd)
        // const {}
        // const { uname, email, password } = { fname, Email, pwd };

        const uname = fname;
        const email = Email;
        const password = pwd;
        console.log(uname, email, password);
        await fetch("http://localhost:5001/reg", {
            method: "POST", crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": true,

            },
            body: JSON.stringify({
                uname,
                email,
                password
            }

            ),

        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error == "User Exists") {
                    alert("User already exists")
                    // flag = 0;
                }
                // navigate(/Signinpage);
                else{

                    console.log("Sucess Signup");
                    localStorage.setItem('token',data.authtoken);
                    navigate('/Makeprof');
                }

            })
        // if(flag==1){
        //     navigate("skills")
        // }
    };



    return (
        <div className="form-conatiner">
            <Navbar />
            <form onSubmit={submitHandler}>
                <div style={mystyle1}>

                    <div>
                        <h3 style={mystyle2}>Sign up</h3>
                        <div style={mystyle3}>
                            <input type="text"
                                placeholder="First and last name" style={{ width: "65%" }}
                                name="fname" onChange={(e) => setFname(e.target.value)} value={fname} />
                        </div>

                        <div style={mystyle3}>
                            <input type="text"
                                placeholder="Enter email " style={{ width: "65%" }}
                                name="email" onChange={(e) => setEmail(e.target.value)} value={Email} />
                        </div>

                        <div style={mystyle3}>
                            <input type="password"
                                placeholder="Create password " style={{ width: "65%" }}
                                name="password" onChange={(e) => setPwd(e.target.value)} value={pwd} />
                        </div>

                        {/* <div style={mystyle3}><input type="password"
                        placeholder="Confirm password " style={{ width: "65%" }} /></div> */}

                    </div>

                    <div className="text-center mt-4 mb-1" style={mystyle4}>
                        <button href="Dashboard" type="submit " className="btn btn-primary " style={{ width: "17%" }}>
                            Next</button>
                    </div>
                    <br /><br /><br /><br /><br />
                    <a href="/Signinpage" type="submit" name="submit"
                    >Now Sign In</a>

                </div>
            </form>
        </div>
    )
}


export default Signuppage;

