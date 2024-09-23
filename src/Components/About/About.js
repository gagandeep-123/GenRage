import React from 'react'
import "./index.scss"


const obj = [
  {
    img: "./truck.png",
    name: "Fast Delivery",
    about:
      "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
  },
  {
    img: "./truck.png",
    name: "Fast Delivery",
    about:
      "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
  },
  {
    img: "./truck.png",
    name: "Fast Delivery",
    about:
      "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
  }
 
];

const About = () => {
  return (
    <div className="outer">
      <p className='p'>Why choose Us?</p>
      <div className="inner">
        {obj.map((ele) => {
          return (
            <div className="card">
              <img style={{ width: "65px" }} src={ele.img}></img>
              <h3>{ele.name}</h3>
              <p>{ele.about}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About