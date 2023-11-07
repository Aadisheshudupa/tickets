import React from "react";
import "./style.css";
import arr from "./seatCount";

function seatBooking() {
  return arr.map((value, index) => (
    <div key={index} className="seats">
      {value}
    </div>
  ));
}


export default seatBooking;
