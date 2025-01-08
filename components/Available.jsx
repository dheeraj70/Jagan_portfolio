import React from "react";
import "./Available.css";

const Available = () => {
  return (
    <>
      <div className="available">
        <img className="fhste" src="/stethoscope.png" alt=" " />

        <h1 className="avh">Available hours</h1>
        <div className="av_div">
            <img className="clock" src="/clock.png" alt="" />
          <div className="av_divl">
            <img className="hospital_img" src="/hospital.png" alt="" />
          </div>
          <div className="av_divr">
            <p>Paramitha Women And Children Hospital</p>
            <p>Madinaguda, Hyderabad</p>
            <p style={{marginTop: '15px'}}>Mon - Sat</p>
            <p style={{marginTop: '15px'}}>Timings: 09:00 AM - 07:00 PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Available;
