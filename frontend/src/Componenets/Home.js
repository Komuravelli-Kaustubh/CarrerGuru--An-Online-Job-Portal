import React from 'react';
import About from './About';
import Carouselandsignup from './Carouselandsignup';
import Features from './Features';
import Footer from './Footer';
import Navbar from './Navbar';
import Rest_index from './Rest_index';
import Ad1 from "./Ad1";
import Ad2 from "./Ad2";
import Ad3 from "./Ad3";
import Ad4 from "./Ad4";
import Gethired from "./Gethired";
import Previous from "./Previous";
import Fiestsec from "./Fiestsec";
import Faqs from './Faqs';

const Home = () => {
    return (
        <div>
            {/* <Navbar/> */}
            {/* <Carouselandsignup/> */}
            {/* <Rest_index/> */}
            {/* <About/> */}
            {/* <Features/> */}
            {/* <Footer/> */}
            {/* new */}
            <Navbar/>
            <Carouselandsignup/>
            {/* <Gethired/> */}
            {/* <Fiestsec/> */}
            <Ad1/>
            <Ad2/>
            <Ad3/>
            <Ad4/>
            <Features/>
            <About/>
            <Faqs/>
            
            {/* <Previous/> */}

            <Footer/>

            
        </div>

    )
}

export default Home;