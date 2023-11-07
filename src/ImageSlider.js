import React, { useCallback, useEffect } from "react";
import { useState,useRef } from "react";
function ImageSlider({slides,parentwidth})
{
    const timeRef=useRef(null);
    const [currentindex,setcurrent]=useState(0);
    const slider={
        height: '100%',
        position: 'relative',
    };
    const gotoslidesstyle= (index)=>({
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage:`url(${slides[index].url})`,
        width: `${parentwidth}px`,
    });
    const leftarrow={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        left: '32px',
        fontSize: '45px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer',
    };
    const rightarrow={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        right: '32px',
        fontSize: '45px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer',
    };
const previous = ()=>{
    const isFirstSlide =currentindex===0;
    const newindex=isFirstSlide?slides.length-1:currentindex-1;
    setcurrent(newindex);
};
const next = useCallback(()=>{
    const islastSlide =currentindex===slides.length-1;
    const newindex=islastSlide?0:currentindex+1;
    setcurrent(newindex);
},[currentindex,slides]);
const dotscontainer={
    display: 'flex',
    justifyContent: 'center',
};
const dot={
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',

};
const godots=(index)=>{
    setcurrent(index);
};
const forFinal={
    height: '100%',
   display: 'flex',
    transition: 'transform ease-out 0.3s',
};

const styleFinal=()=>({
...forFinal,
width: `${slides.length * parentwidth}px`,
transform: `translateX(${-(currentindex *parentwidth)}px)`,

});
const slidesoverflow={
    overflow: 'hidden',
    height: '100%',
}
useEffect(()=>{
    if(timeRef.current)
    {
        clearTimeout(timeRef.current);
    }
timeRef.current=setTimeout(()=>
{
    next();
},3000);
return ()=> clearTimeout(timeRef.current);
},
[next])
    return( <div style={slider}>
        <div style={leftarrow} onClick={previous}>←</div>
        <div style={rightarrow} onClick={next}>→</div>
        <div style={slidesoverflow}>
        <div style={styleFinal()}>
            {slides.map((_, index)=> (
              <div key={index} style={gotoslidesstyle(index)}></div>
            ))}
        </div>
        </div>
        <div style={dotscontainer}>
            {slides.map((slide,index)=>
            (
             <div key={index} style={dot} onClick={()=>godots(index)}>•</div>
            ))}
        </div>
           
    </div>
    );
}
export default ImageSlider;