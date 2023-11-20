import React from "react";
import "./style.css"
function Confirm(data) {
    return <div className="confirm">
        <br />
        <br />
        <br />
        <br />
       <b>Name of the film:</b> {data.film}
        <hr />
        <b>Personal Information</b>
        <br />
        <b>Name of Receipient: </b> {data.names}
        <br />
       <b> Phone Number:  </b>{data.phone}
      <hr />
       <b> Date of Watch: </b>{data.date}
        <hr />
        <b>      Seats Booked:</b>  
        {data.seats?.map(arr=><div>{arr}</div>)}
        <hr />
       <b> Total Cost: </b>{data.total}
    </div>
}
export default Confirm