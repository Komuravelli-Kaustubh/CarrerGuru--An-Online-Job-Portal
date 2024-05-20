import React, { useState, useEffect } from "react";
import Newnavbar from "./Newnavbar";
// import jwt_decode from "jwt-decode";

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const userEmail1 = sessionStorage.getItem("userEmail");
    useEffect(() => {
        // Function to fetch user's profile data
        const fetchProfileData = async () => {
            try {
                // Get the JWT token from localStorage (assuming you've already stored it there during login)
                // const jwtToken = localStorage.getItem('token');
                // Decode the JWT token to get the username
                // const decodedToken = jwtToken ? jwt_decode(jwtToken) : null;
                // const username = decodedToken ? decodedToken.username : null;

                // if (username) {
                console.log(`userEmail: ${userEmail1}`);

                const response = await fetch(`http://localhost:5001/profile/`,{
                    method: 'GET',
                    headers: {
                        'Content-Type'  : 'application/json',
                        "authtoken" : localStorage.getItem('token')
           
                    }
                }); // Replace with your actual server URL and user ID
                // const response = await fetch('http://localhost:5001/profile?reg_username=${username}'); // Replace with your actual server URL and user ID
                const data = await response.json();
                setProfileData(data);
                // }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        // Call the fetchProfileData function when the component mounts
        fetchProfileData();
    }, [userEmail1]);

    if (!profileData) {
        // Loading state while fetching data
        return <div>Loading...</div>;
    }

    return (
        <>
            <Newnavbar />
            <title>View Profile</title>
            {/* Add your custom CSS file link here (if any) */}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f9f9f9;\n        }\n\n        .profile-card {\n            max-width: 800px;\n            margin: 50px auto;\n            padding: 20px;\n            background-color: #f1f1f1;\n            border-radius: 10px;\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n        }\n\n        .profile-img {\n            width: 150px;\n            height: 150px;\n            border-radius: 50%;\n            margin: 0 auto 20px;\n            background-color: #f1f1f1;\n            background-image: url('http://localhost:5001/uploads/${profileData.profilePicture}'); /* Replace 'http://localhost:5001' with the actual URL of your backend server */\n            background-size: cover;\n        }\n\n        .section-title {\n            font-size: 24px;\n            font-weight: bold;\n            margin-bottom: 10px;\n        }\n\n        .profile-field {\n            margin-bottom: 20px;\n        }\n\n        .profile-field label {\n            font-weight: bold;\n        }\n\n        .profile-field span {\n            display: block;\n            margin-top: 5px;\n            white-space: pre-line;\n        }\n    "
                }}
            />
            <div className="profile-card">
                <span>{profileData.profilePicture}</span>

                <div className="profile-img">
                    {/* <img src={`${profileData.profilePicture}`} alt="Profile Picture" /> */}
                    {/* <img src={`http://localhost:5001/uploads/${profileData.profilePicture}`} alt="Profile Picture" /> */}
                     {/* Assuming profileData contains the data received from the server, including the profile picture filename */}
                    <img src={'http://localhost:5001/uploads/' + profileData.profilePicture} alt="Profile Picture" />


                </div>
                <div className="profile-field">
                    <label className="section-title">Personal Information</label>
                    <div>
                        <label>Name:</label>
                        <span>{profileData.name}</span>
                    </div>
                    <br />
                    <div>
                        <label>Date of Birth:</label>
                        <span>{profileData.dateOfBirth}</span>
                    </div>
                    <br />
                    <div>
                        <label>Mobile/Telephone:</label>
                        <span>{profileData.phoneNumber}</span>
                    </div>
                    <br />
                    <div>
                        <label>Email:</label>
                        <br />
                        <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                    </div>
                    <br />
                    <div>
                        <label>Gender:</label>
                        <span>{profileData.gender}</span>
                    </div>
                    <br />
                    <div>
                        <label>Educational Qualifications:</label>
                        <span>{profileData.education}</span>
                    </div>
                    <br />
                    <div>
                        <label>Past Experience:</label>
                        <span>{profileData.previousExperiences}</span>
                    </div>
                </div>
                {/* <div className="profile-field"> */}
                    {/* <label className="section-title">Hobbies</label> */}
                    {/* <ol>
                        {profileData.hobbies.map((hobby, index) => (
                            <li key={index}><h6>{hobby}</h6></li>
                        ))}
                    </ol> */}
                    {/* <ol> */}
                        {/* {profileData?.hobbies?.map((hobby, index) => ( */}
                            {/* <li key={index}> */}
                                {/* <h6>{hobby}</h6> */}
                            {/* </li> */}
                        {/* ))} */}
                    {/* </ol> */}
                {/* </div> */}
                <div className="profile-field">
                    <label className="section-title">Present City</label>
                    <div>
                        <span>{profileData.city}</span>
                    </div>
                    {/* <div>
                         <span>Job Preferences:</span>
                           <span>{profileData.jobPreferences}</span>
                       </div> */}
                    <div>
                        <label className="section-title">Alumni Details</label>
                        <span>{profileData.alumniDetails}</span>
                    </div>

                </div>
                {/* Add other fields as needed */}
            </div>
        </>
    );
};

export default Profile;



// import React, { useState, useEffect } from "react";
// import Newnavbar from "./Newnavbar";

// const Profile = () => {
//     const [profileData, setProfileData] = useState(null);

//     useEffect(() => {
//         // Function to fetch user's profile data
//         const fetchProfileData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5001/profile/pry@gmail.com'); // Replace with your actual server URL and user ID
//                 const data = await response.json();
//                 setProfileData(data);
//             } catch (error) {
//                 console.error('Error fetching profile data:', error);
//             }
//         };

//         // Call the fetchProfileData function when the component mounts
//         fetchProfileData();
//     }, []);

//     if (!profileData) {
//         // Loading state while fetching data
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <Newnavbar />
//             <div className="container-fuid">
//                 <div className=" p-3">
//                     <h3><u>View your Profile:</u></h3>
//                 </div>
//                 <br />
//                 <div className="forborder border border-dark mt-2 ms-3 me-3 p-4">
//                     <div className="row">
//                         <div className="col-md-5">
//                             <br />
//                             <b className="fs-5">Name:</b>
//                             <div className="fs-5">{profileData.name}</div>

//                             <br />

//                             <b className="fs-5">Date Of Birth:</b>
//                             <div className="fs-5">{profileData.dateOfBirth}</div>
//                             <br />

//                             <b className="fs-5">Mobile/Telephone:</b>
//                             <div className="fs-5">{profileData.phoneNumber}</div>
//                             <br />

//                             <b className="fs-5">Email Id:</b><br />
//                             <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
//                             <br /><br />

//                             <b className="fs-5">Gender:</b>
//                             <div className="fs-5">{profileData.gender}</div>
//                             <br />

//                             <b className="fs-5">Educational Qualifications:</b>
//                             <div className="fs-5">{profileData.education}</div>
//                             <br />

//                             <b className="fs-5">Past Experience:</b>
//                             <div className="fs-5">{profileData.previousExperiences}</div>
//                             <br />

//                         </div>
// {/* <span>{profileData.profilePicture}</span> */}
// {/* "C:\Users\Kaust\Desktop\ps1\Backend\uploads\1690013836375-WhatsApp Image 2023-06-16 at 21.13.46.jpeg" */}
//                         <div className="col-md-5 offset-md-2">
//                             <br />
//                             <div className="row ">
//                                 <img
//                                     // src="C://Users/Kaust/Desktop/ps1/Backend/${profileData.profilePicture}"
//                                     src="C://Users/Kaust/Desktop/ps1/Backend/uploads/1690013836375-WhatsApp Image 2023-06-16 at 21.13.46.jpeg"
//                                     alt="Profile  hai"
//                                     className="rounded-circle"
//                                     style={{ width: "40%", marginLeft: "auto" }}
//                                 />
//                                 {/* <img src={profileData.profilePicture} alt="Profile Picture" className=" rounded-circle" style={{ width: "40%", marginLeft: "auto" }} /><br /> */}
//                             </div>
//                         </div>
//                     </div>
//                     <hr />
//                     <div className="row">
//                         <div className="text-center"><h3>Hobbies:</h3></div>
//                         <div className="col-md-5">
//                             <ul>
//                                 {profileData.hobbies.map((hobby, index) => (
//                                     <li key={index}><h4>{hobby}</h4></li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;
