import React from 'react'
import "./index.scss";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from 'react';


const Scroller = () => {
     const { ref, inView } = useInView({
       threshold: 0.4, // Trigger when 10% of the component is visible
       triggerOnce: true, // Trigger animation only once
     });
    const [showText, setShowText] = useState(false);

    useEffect(() => {
      if (inView) {
        // Delay showing the text until after the animation ends
        const timer = setTimeout(() => {
          setShowText(true);
        }, 2000); // Matches the animation duration

        return () => clearTimeout(timer); // Cleanup timeout if component unmounts
      }
    }, [inView]);
    return (
      <div className="max-box">
        <div ref={ref} className="sliding-text-container">
          <div className={`sliding-text ${inView ? "slide-in" : ""}`}>
              <div className='div1'
                style={{
                  width: "59%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "30px 50px",
                }}
              >
                <h2 className='h2'
                  style={{
                    fontSize: "40px",
                    fontWeight: "900",
                    margin: "0px",
                    color:"black"
                    
                  }}
                >
                  Make money, Risk Free
                </h2>
                <p className='p1' style={{fontSize:"20px", fontStyle:"italic"}}>You pay for fulfillment only when you make a sale</p>
                <div className="box">
                  <div className="content">
                    <p>You sell a t-shirt</p>
                    <p>$ 30</p>
                  </div>
                  <div className="content">
                    <p>You pay for its production</p>
                    <p>$ 12</p>
                  </div>
                  <div className="content">
                    <p>Your profit</p>
                    <p>$ 18</p>
                  </div>
                </div>
                <button className='button'>Start Selling</button>
                <p className='footer-text'>100% Free to use · 900+ Products · Largest print network</p>
              </div>
          </div>
        </div>
        <div className="image-container">
          <img src="./money.jpg"></img>
        </div>
      </div>
    );
}

export default Scroller