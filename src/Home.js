import React from "react";
import ImageSlider from "./ImageSlider";
import Api from "./api";
import { BrowserRouter } from 'react-router-dom';


function Home()
{
    const {Apii,Data}=Api();
    const slides=[
        {url:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-wonderla-amusement-park-bangalore-0-2022-1-28-t-12-45-26.jpg",title:"add1"},
        {url:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-abhishek-upmanyu-live-0-2023-10-20-t-3-48-40.jpg",title:"add2"},
        {url:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ed-sheeran-tour-0-2023-10-30-t-12-48-15.jpg",title:"add3"},
        {url:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2023-7-25-t-16-3-33.jpg",title:"add4"} ,
        {url:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jonita-gandhi-live-in-concert-0-2023-11-7-t-5-41-36.jpg",title:"add5"} ,
        {url:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jollywood-studios-and-adventure-0-2023-9-25-t-7-23-20.jpg",title:"add6"} ,
        {url:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-bandland-0-2023-10-25-t-19-48-49.jpg",title:"add7"} ,
        {url:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-candlelight-india-a-tribute-to-coldplay-1-2023-11-2-t-8-43-41.jpg",title:"add8"} ,
    ];
    
    const containstyle = {
        width: '1200px',
        height: '500px',
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