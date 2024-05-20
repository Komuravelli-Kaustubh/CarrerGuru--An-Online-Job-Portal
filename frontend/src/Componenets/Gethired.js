import React from "react";

const Gethired = () => {
    return (
        <div>
            <div className="gethired">
                <div>
                    <u><span className="text-center">
                        <h3 style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Get Hired in 3 Steps</h3>
                    </span></u>
                </div>
                <br />
                <div className="row">
                    <div className="col-md text-center">
                        <img src="Step1_forhiring.png" alt=" Step1-img"/>
                    </div>
                    <div className="col-md text-center">
                        <img src="step2_forhiring.png" alt="Step2-img"/>
                    </div>

                    <div className="col-md text-center">
                        <img src="step3_forhiring.png" alt="Step3-img" />
                    </div>
                </div>
            </div>
            <hr />
            <hr />
        </div >
    )
}

export default Gethired;