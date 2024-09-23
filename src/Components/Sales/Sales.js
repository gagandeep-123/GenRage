import React from 'react'
import "./index.scss";

const Sales = () => {
    
  return (
    <div className="outer-box">
      <div className="box">
        <div className="text-div">
          Are you a large buisness looking for custom solutions ?
        </div>
        <div className="btn-div">
          <button
            style={{
              height: "38px",
              width: "160px",
              borderRadius: "9px",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Talk to sales
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default Sales