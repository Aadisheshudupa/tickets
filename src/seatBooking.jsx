import React from "react";
import "./style.css";
import arr,{height} from "./seatCount";
import tv from "./LA9700_large_04.jpg";
import {useEffect,useState} from 'react';
import { BrowserRouter,NavLink,Routes,Route } from "react-router-dom";
import Confirm from "./confirmation";

function SeatBooking(movie) {
  const [myArray, setMyArray] = useState([]);
  const [isColorChanged, setIsColorChanged] = useState(Array(arr.length*height.length).fill(false));
  const [block,setblock]=useState(Array(4).fill(false));
  const [datab,setdatab]=useState([])
  const [moviedate,setdate]=useState();
  const [name,setname]=useState();
  const [num,setnum]=useState();
  const [disbutton,setdisbutton]=useState(false);
  const[result,setresult]=useState([]);
  const[conseats,setconseats]=useState([]);
  const [disseats, setdisseats] = useState([]);
  const[block1,setblock1]=useState(false);
  const[error,seterror]=useState();
const today=new Date();
const today1=new Date(today);
today1.setDate(today.getDate()+1);
const today2=new Date(today1);
today2.setDate(today1.getDate()+1);
  const addArray = (chars,seat) => {
    const comb=''+seat;
    const combi=chars+comb;
    if(myArray.includes(combi))
    {
      const temp=myArray.filter(ele=>ele!==combi);
      setMyArray(temp);
      const colourchange=[...isColorChanged];
    colourchange[(chars?.charCodeAt(0)-65)*arr.length+seat-1]=false;
    setIsColorChanged(colourchange);
    }
    else
    {
    setMyArray([...myArray, combi]);
    const colourchange=[...isColorChanged];
    colourchange[(chars?.charCodeAt(0)-65)*arr.length+seat-1]=true;
    setIsColorChanged(colourchange);
    }
  };
  const nameset = (event) => {
    setname(event.target.value);
  };
  const numset = (event) => {
    setnum(event.target.value);
  };
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://tickets-ebon.vercel.app//api/data');
      const result = await response.json();
      console.log(result);
      setresult(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };

    const dateallotment = (date)=>{
      if(block.includes(true))
      {}
      else{
      
      if(date===today.toDateString())
      {
        const temp=[...block];
        temp[0]=true;
        temp[1]=false;
        temp[2]=false;
        temp[3]=true;
        setblock(temp);
      }
      else if(date===today1.toDateString())
      {
        const temp=[...block];
        temp[1]=true;
        temp[0]=false;
        temp[2]=false;
        temp[3]=true
        setblock(temp);
      }
      else if(date===today2.toDateString())
      {
        const temp=[...block];
        temp[2]=true;
        temp[1]=false;
        temp[0]=false;
        temp[3]=true;
        setblock(temp);
      }
      setdate(date);
      fetchData();
    }
    };
    useEffect(() => {
      if(disseats.length<29)
      {
      conseats.map(seatpoint=>{
        const chars=seatpoint?.substring(0,1);
        const nums=seatpoint?.substring(1);
        var num=(chars?.charCodeAt(0)-65)*arr.length+parseInt(nums)-1;
        var array=disseats;
        array[num]=true;
        console.log(array);
        setdisseats([ ...array]);        
      })
        setblock1(true);
        console.log(block1);}
    }, [conseats]);
    useEffect(() => {
      // This will run after the state is updated
      console.log('Value2 has been updated:', typeof moviedate,moviedate,typeof result[0]?.date,result[0]?.date.substring(0,15));
      const tot = result?.map((arr)=> {
        if(movie?.title===arr?.film)
        {
        if (moviedate === arr?.date.substring(0,15)) {
          return arr?.seats;
        }
        return null;
      }});
      setconseats([].concat(...tot.filter(seats => seats !== null)));
    }, [result]);
    const handleSubmit = async (event) => {
      
    
      try {
        const response = await fetch('https://tickets-ebon.vercel.app//api/data', {
          method: 'POST',
          mode:'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(datab),
        });
      } catch (error) {
        console.error('Error adding item:', error);
      }

    };

  const handleSubmitdata= ()=>{
    if(myArray.length==0)
    {
      seterror("Please select seats");
    }
    else if(!name)
    {
      seterror("Please enter your name");
    }
    else if(!num)
    {
      seterror("Please enter your phone number");
    }
    else if(num.length!=10||!/^\d{10}$/.test(num))
    {
      seterror("Please enter correct phone number");
    }
    else{
    setdatab({
      film:movie?.title,
      total: myArray.length*200,
      seats:[...myArray],
      date:moviedate,
      names:name,
      phone:num,
      });
    setdisbutton(true);
    }
};

  return <div>
    <br />
    <br />
    <h2>{movie?.title} 
            <button className="book" onClick={()=> dateallotment(today.toDateString())} style={{backgroundColor:block[0] ? 'green' : '#50C8CE' }}>{today.toDateString()}</button>
            <button className="book"onClick={()=> dateallotment(today1.toDateString())} style={{backgroundColor:block[1] ? 'green' : '#50C8CE' }}>{today1.toDateString()}</button>
            <button className="book"onClick={()=> dateallotment(today2.toDateString())} style={{backgroundColor:block[2] ? 'green' : '#50C8CE' }}>{today2.toDateString()}</button></h2>
    <hr />
    <br />
    <table className="table" style={{display: block[3]&&block1 ? 'block':'none'}}>
      <tr>
        <td width={1000}>
  {height.map((value, ind) => (<div key={ind}>
    <div className="seatss">
    {String.fromCharCode(65+ind)}
    </div>
  {arr.map((value, index) => (
    <button key={index} className="seats" disabled={disseats[ind*arr.length+index]} onClick={() => addArray(String.fromCharCode(65+ind),value)}  style={{backgroundColor:isColorChanged[ind*arr.length+index] ? '#6CCF4C' : '#FEFA7E' }}>
      {value}
    </button>
  ))}</div>))}
  <br />
  <img src={tv} alt="" className="screen"/>
  </td>
  <td>  
    Seats: {myArray.length > 0 ? myArray.map(char=>(<div>{char}</div>)) : ''}
    <hr />
    total: {myArray.length>0 ? myArray.length*200:''}
    <hr />
    <label>
        Name:
        <input type="text" value={name} onChange={nameset} required/>
    </label>
    <hr />
    <label>
        Phone Number:
        <input type="tel" value={num} onChange={numset} required/>
    </label>
    <hr />
  <button className="book" onClick={handleSubmitdata}style={{display:disbutton ? 'none':'block'}}><b>BOOK</b></button>
  <div style={{display:disbutton ? 'none':'block'}}>{error}</div>
  <NavLink to="/"><button className="book" onClick={handleSubmit} style={{display:disbutton ? 'block':'none'}}><b>CONFIRM</b></button></NavLink>
  
  </td>
  </tr>
  </table>
    <hr />
    <div style={{display:disbutton ? 'block':'none'}}>{Confirm(datab)}</div>
    
  </div>
 
}


export default SeatBooking;
