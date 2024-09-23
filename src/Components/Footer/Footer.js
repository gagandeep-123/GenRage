import React from 'react'
import "./index.scss";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="frame">
      <div style={{display : "flex", justifyContent : "center"}}>
        <p className='text'>Intellectual Property Policy </p>
          <p className='text'>Terms of Service</p>
              <p className='text'>Privacy Policy</p>
              <p className='text'>Security</p> 
        
      </div>
      <div style={{fontSize: "18px",
    fontWeight: "400",
    paddingTop: "6px"}}><FaCopyright style={{    width: "13px",
    height: "15px",
    paddingRight: "4px"}} />All rights reserved.</div>
    </div>
  );
}

export default Footer