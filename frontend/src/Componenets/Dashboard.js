import React from "react";
import Ad1 from "./Ad1";
import Ad2 from "./Ad2";
import Ad3 from "./Ad3";
import Ad4 from "./Ad4";
import Gethired from "./Gethired";
import Previous from "./Previous";
import Fiestsec from "./Fiestsec";
import Footer from "./Footer";
import Newnavbar from "./Newnavbar";


const Dashboard=()=>{
    return(
        <div>
            <Newnavbar/>
            <Fiestsec/>
            <Ad1/>
            <Ad2/>
            <Ad3/>
            <Ad4/>
            <Gethired/>
            <Previous/>
            <Footer/>
        </div>
    )
}



export default Dashboard;