import React from "react";
import Header from "./header";
import SeatBooking from "./seatBooking";
import screen from "./LA9700_large_04.jpg";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movie";
function App()
{
    return(<div>
        <Header/>
        
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movies/>}/>
    </Routes>
      



      </div>
      );
}
export default App;