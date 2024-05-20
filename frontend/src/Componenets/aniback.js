const express = require("express");
const app = express();
const cors = require("cors");
//const bodyParser = require("body-parser");
// const logger = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
// app.use(logger('dev'));
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hbljvivuyvuylv";

// app.use(bodyParser.json());
mongoose.connect("mongodb+srv://toprecommendations:harshithalle123@cluster0.182dkb4.mongodb.net/CareerGuruJobs?retryWrites=true&w=majority", { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Mongo connected");
    }
});
const loginSchema = {
    username: "String",
    Password: "String"
};
const Login = mongoose.model("Logininfo", loginSchema);
app.get("/logininfos", function (req, res) {
    Login.find(function (err, loginlist) {
        res.send(loginlist)
    })
})
const signupSchema = {
    uname: "String",
    email: { type: "String", unique: true },
    password: "String"
};
const Signup = mongoose.model("Signupinfo", signupSchema);
app.post("/signupinfos", async (req, res) => {
    console.log(req.body)
    const { uname, email, password } = req.body;
    const encyptedPassword = await bcrypt.hash(password, 10);

    try {
        const oldUser = await Signup.findOne({ email });
        if (oldUser) {
            return res.send({ error: "User Exists" });
            // alert("User exists");
        }
        await Signup.create({
            uname, email, password: encyptedPassword
        });
        res.send({ status: "ok" });
    } catch (error) {
        res.send({ status: "error" })
    }
})
app.get("/signupinfos", function (req, res) {
    Signup.find(function (err, signuplist) {
        res.send(signuplist)
    })
})