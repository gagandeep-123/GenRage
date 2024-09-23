import React from 'react'
import "./index.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";




const Body = () => {
    const [text] = useTypewriter({
      words: [
        "Where Style Meets Precision",
        "Where Every Print Tells a Story",
        "Where Quality Meets Style",
        "Where Printing Meets Swag",
      ],
      loop: {},
    });
  return (
    <div className="main">
      <div className="inner">
        <div className="text-container">
          <h1 className="head">
            <span style={{ color: "black", fontWeight: "800" }}>
              {text} <Cursor />
            </span>
          </h1>
          <p className="para">Largest global print network</p>
          <div className="btn-container">
            <button className="btn1">Start for free</button>
            <button className="btn2">How it works</button>
          </div>
          <p className="para-two">
            Trusted by over 8M sellers around the world
          </p>
        </div>
        <div className="image-container">
          <img className='chair' src="./tshirt2.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Body