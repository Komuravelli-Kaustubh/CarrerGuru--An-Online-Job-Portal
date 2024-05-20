import React from "react";

const Previous = () => {
    return (
        <div>
            <div className="pastrecruited">
                <div className="row">
                    <div className="col-12">
                        <u><span className="text-center">
                            <h3 style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Job Seekers from our platform got listed in..</h3>
                        </span></u>
                    </div>
                </div>
                <br /><br />
                <div className="d-flex flex-row align-items-strech">


                    <div className="card" style={{width:"150px"}}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Aditya_Birla_Group_Logo.svg/1200px-Aditya_Birla_Group_Logo.svg.png"
                            className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p>Aditya Birla Group</p>
                        </div>
                    </div>



                    <div className="card" style={{width:"150px"}}>
                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Airbus-Logo-2001-2010.png" className="card-img-top"
                            alt="..." />
                        <div className="card-body">
                            <p>Airbus</p>
                        </div>
                    </div>

                    <div className="card" style={{width:"150px"}}>
                        <img src="https://www.tajhotels.com/content/dam/tajhotels/icons/style-icons/logo--Taj.png" className="card-img-top"
                            alt="..." />
                        <div className="card-body">
                            <p>Taj hospitalities</p>
                        </div>
                    </div>



                    <div className="card" style={{width:"150px"}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p>Larsen and Toubro</p>
                        </div>
                    </div>

                    <div className="card" style={{width:"150px"}}>
                        <img src="https://cdn.siasat.com/wp-content/uploads/2021/06/Binance.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p>Binance</p>
                        </div>
                    </div>



                    <div className="card" style={{width:"150px"}}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Economist_Logo.svg/1200px-The_Economist_Logo.svg.png"
                            className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p>The Economist</p>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <h3 className="text-center" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>If They can , So do you</h3>
                </div>
            </div>
            <hr />
        </div >
    )
}

export default Previous;