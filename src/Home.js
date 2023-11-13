import React from "react";
import ImageSlider from "./ImageSlider";
import Api from "./api";
import { BrowserRouter } from 'react-router-dom';


function Home()
{
    const {Apii,Data}=Api();
    const slides=[
        {url:"https://assets-in.bmscdn.com/promotions/cms/creatives/1698603955302_web.jpg",title:"add1"},
        {url:"https://assets-in.bmscdn.com/promotions/cms/creatives/1699029239909_westlifeblrrevdesktop.jpg",title:"add2"},
        {url:"https://assets-in.bmscdn.com/promotions/cms/creatives/1698747347274_lollaroaddesktop.jpg",title:"add3"},
        {url:"https://assets-in.bmscdn.com/promotions/cms/creatives/1696500696429_candlelightdesktop.jpg",title:"add4"} ,
    ];
    const containstyle = {
        width: '1200px',
        height: '300px',
        margin: '0 auto',
    };
    return (
    <div>
       <br/>
       <br/>
       
        <div style={containstyle }>
        <ImageSlider slides={slides} parentwidth={1200}/>
        </div>
        <br/>
        <br/>
        <h2 className="font">Trending Movies </h2>
        <br/>
        {Apii}    </div>
    );
}
export default Home;  