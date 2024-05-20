import Footer from "./Footer";
import Navigation from "./Navigation";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate();
    const flag = 1;
    const [input, setInput] = useState({
        uname: "",
        email: "",
        password: ""

    });
    const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input,
            [name]: value,
        })

    };
    // console.log(input);
    const submitHandler = (e) => {
        e.preventDefault();
        // const {}
        const { uname, email, password } = input;
        console.log(input);
        fetch("http://localhost:5000/signupinfos", {
            method: "POST", crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",

            },
            body: JSON.stringify({
                uname,
                email,
                password
            }

            ),

        }).then((res) => res.json())
            .then((data) => {
                if (data.error == "User Exists") {
                    alert("User already exists")
                    flag = 0;
                }

                console.log(data, "userRegister");

            })
        // if(flag==1){
        //     navigate("skills")
        // }




    };

    return (
        <div>
            <Navigation />
            <div style={{ border: "1px solid", borderRadius: "11px", padding: "2%", margin: "5%", height: "500px", position: "relative" }}>

                <div>
                    <h3 style={{ color: "grey", textAlign: "center" }}>Sign up</h3>
                    <form onSubmit={submitHandler} method="POST">
                        <div style={{ padding: "1%", textAlign: "center" }}><input name="uname" onChange={inputHandler} value={input.uname} style={{ width: "50%" }} type="text" placeholder="First and last name" /></div>
                        <div style={{ padding: "1%", textAlign: "center" }}><input name="email" onChange={inputHandler} value={input.email} style={{ width: "50%" }} type="text" placeholder="Email" />
                        </div>

                        <div style={{ padding: "1%", textAlign: "center" }}><input name="password" onChange={inputHandler} value={input.password} style={{ width: "50%" }} type="password"
                            placeholder="Create Password" /></div>
                        <button type="submit" className="btn btn-primary" style={{ width: "20%", position: "absolute", bottom: "1%", right: "1%", textAlign: "center" }}
                            href="user">Next</button>
                    </form>


                </div>







            </div>
            <Footer />

        </div>

    )
}
export default Signup;