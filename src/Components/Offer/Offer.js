import React from 'react'
import "./index.scss"

const list = [
  {
    name: "CREATE",
    title: "custom products",
    img: "",
    abt: "Easily add your designs to a wide range of products using our free tools",
  },
  {
    name: "SELL",
    title: "on your terms",
    img: "",
    abt: "You choose the products, sale price, where to sell",
  },
  {
    name: "WE HANDLE",
    title: "fulfillment",
    img: "",
    abt: "Once an order is places we handle all the printing and delivery logistics",
  },
];

const Offer = () => {
  return (
    <div className="main1">
      <p className='main-text'
        style={{
          fontSize: "40px",
                  fontWeight: "700",
        }}
      >
        What we offer
      </p>
      <div className="inner">
        {list.map((ele) => {
          return (
            <div className="card">
              <img style={{ width: "212px" }} src="./drawing2.png"></img>
              <p
                style={{
                  display: "flex",
                  marginTop: "-7px",
                  fontSize: "25px",
                  fontWeight: "800",
                }}
              >
                {ele.name}
              </p>
              <p
                style={{
                  display: "flex",
                  marginTop: "-28px",
                  fontSize: "32px",
                          color: "#485256",
                  fontWeight : "600"
                }}
              >
                {ele.title}
              </p>
              <p style={{ display: "flex", textAlign: "center", marginTop : "-6px" }}>{ele.abt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Offer