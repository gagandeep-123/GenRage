import React from 'react'
import "./index.scss";

const object = [
    {
        name : "Catalog"
    },
    {
        name : "How it works"
    },
    {
        name : "Pricing"
    },
    {
        name : "Blog"
    },
    {
        name : "Services"
    },
    {
        name : "Use-cases"
    },
    {
        name : "Need help?"
    }
]

const Header = () => {
  return (
    <div className="outest">
      <div className="image-container">
              GenRage
      </div>
      <div className="list-container">
        <ul className="list">
          {object.map((item) => {
            return <li className="list-item">{item.name}</li>;
          })}
        </ul>
      </div>
      <div className="btn-container">
        <a className='login'>Log in</a>
        <a className='signup'>Sign up</a>
      </div>
    </div>
  );
}

export default Header