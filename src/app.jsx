import React from "react";
import Header from "./header";
import SeatBooking from "./seatBooking";
import screen from "./LA9700_large_04.jpg";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Api from "./api";
import Home from "./Home";
import Movies from "./Movie";
import Desc from "./moviedesc";

function App()
{
    const {Apii,Data}=Api();

    return(<div>
        <Header/>
    <Routes>
        <Route path="" element={<Home/>}/>
        <Route path={Data[0]?.title} element={Desc(Data[0])}/> 
        <Route path={Data[1]?.title} element={Desc(Data[1])}/> 
        <Route path={Data[2]?.title} element={Desc(Data[2])}/> 
        <Route path={Data[3]?.title} element={Desc(Data[3])}/> 
        <Route path={Data[4]?.title} element={Desc(Data[4])}/> 
        <Route path={Data[5]?.title} element={Desc(Data[5])}/> 
        <Route path={Data[6]?.title} element={Desc(Data[6])}/> 
        <Route path={Data[7]?.title} element={Desc(Data[7])}/> 
        <Route path={Data[8]?.title} element={Desc(Data[8])}/> 
        <Route path={Data[9]?.title} element={Desc(Data[9])}/> 
 
    </Routes>
      </div>
      );
}
export default App;