import React from "react";
import SeatBooking from "./seatBooking";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Api from "./api";
function Movies()
{
    const {Apii,Data}=Api();

    return <div>
        <br />
        <br />
        <br />

    <br />
    <br />
    {Apii}
            </div>
}
export default Movies;