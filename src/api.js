import {useEffect,useState} from 'react';
import "./style.css"
import { BrowserRouter,NavLink,Routes,Route } from "react-router-dom";
import seatBooking from "./seatBooking";
import Movies from './Movie';

const fetch = require('node-fetch');
function Api(){
    const [kn_data,state1]=useState([]);
    const [te_data,state2]=useState([]);
    const [ta_data,state3]=useState([]);
    const [hi_data,state4]=useState([]);
    const [en_data,state5]=useState([]);

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2023-10-01&primary_release_date.lte=2023-11-24&sort_by=popularity.desc&watch_region=India&with_original_language=ta%7Cte%7Chi';
const url2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2023-10-01&primary_release_date.lte=2023-11-24&sort_by=popularity.desc&watch_region=India&with_original_language=kn';
const url1 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2023-10-01&primary_release_date.lte=2023-11-24&sort_by=popularity.desc&watch_region=India&with_original_language=en';
useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY5NDY1M2YxMzZmZDYxMmIxNThiMDk1YTY2NzhiNCIsInN1YiI6IjY1M2I5NWZhNTkwN2RlMDEzOGUwYmU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MwaTcNsdK_qDhxuLIZLos7KvVhwga1wyHdmaUzJ_no0'
    }
  };
  var te=0;
var ta=0;
var hi=0;
const en_array=[];
const ta_array=[];
const kn_array=[];
const te_array=[];
const hi_array=[];
  fetch(url2, options)
  .then(res => res.json())
  .then(json => {
    const movies=json.results;

    kn_array[0]=movies[0];
    kn_array[1]=movies[1];
    state1(kn_array);
  })
  .catch(err => {console.error('error:' + err)});
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      const movies=json.results;
      movies.map(movie => {
          if(movie.original_language==="te"&&te<2)
          {  if(movie.poster_path)
            {
              te_array[te]=movie;
              te=te+1;
            }
          }
          if(movie.original_language==="ta"&&ta<2)
          {
            if(movie.poster_path)
            {
              ta_array[ta]=movie;
              ta=ta+1;
            }
          }
          if(movie.original_language==="hi"&&hi<2)
          {
            if(movie.poster_path)
            {
              hi_array[hi]=movie;
              hi=hi+1;
            }
          }
      })
      state2(te_array);
      state3(ta_array);
      state4(hi_array);
    })
    .catch(err => {console.error('error:' + err)
  });
  
    fetch(url1, options)
    .then(res => res.json())
    .then(json => {
      const movies=json.results;
      en_array[0]=movies[0];
      en_array[1]=movies[1];
      state5(en_array);
    })
    .catch(err => {console.error('error:' + err)
  });
},[])
    console.log(ta_data[0]?.title);
    var all = [].concat.apply([],[ta_data,te_data,kn_data,hi_data,en_data]);
    return{
      Apii:<div className='select'>
          <Routes>
          <Route path="/Leo" element={<Movies/>}/>
          </Routes>
          <div className='movieselection'>
          <NavLink to={`/${kn_data[0]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${kn_data[0]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{kn_data[0]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${ta_data[0]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${ta_data[0]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{ta_data[0]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${te_data[0]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${te_data[0]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{te_data[0]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${en_data[0]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${en_data[0]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{en_data[0]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${hi_data[0]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${hi_data[0]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{hi_data[0]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${kn_data[1]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${kn_data[1]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{kn_data[1]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${en_data[1]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${en_data[1]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{en_data[1]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${ta_data[1]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${ta_data[1]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{ta_data[1]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${hi_data[1]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${hi_data[1]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{hi_data[1]?.title}</h3>
          </div>
          <div className='movieselection'>
          <NavLink to={`/${te_data[1]?.title}`}><img src={`https://image.tmdb.org/t/p/w500${te_data[1]?.poster_path}`} alt="" className="posters" ></img></NavLink>
            <h3>{te_data[1]?.title}</h3>
          </div>
        </div>,
        Data:all,

    
    
};


}
export default Api;