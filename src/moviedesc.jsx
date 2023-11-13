import React from "react";
import "./style.css"
function Desc(movie)
{const genre_array=[];
    var n=0;
    movie?.genre_ids.map(id=>{
    switch(id){
        case 28:
            genre_array[n]="Action"
            n=n+1
            break;
        case 12:
            genre_array[n]="Adventure"
            n=n+1
            break;
        case 16:
            genre_array[n]="Animation"
            n=n+1
            break;
        case 35:
            genre_array[n]="Comedy"
            n=n+1
            break;
        case 80:
            genre_array[n]="Crime"
            n=n+1
            break;
        case 99:
            genre_array[n]="Documentary"
            n=n+1
            break;
        case 18:
            genre_array[n]="Drama"
            n=n+1
            break;
        case 10751:
            genre_array[n]="Family"
            n=n+1
            break;
        case 14:
            genre_array[n]="Fantasy"
            n=n+1
            break;
        case 36:
            genre_array[n]="History"
            n=n+1
            break;
        case 27:
            genre_array[n]="Horror"
            n=n+1
            break;
        case 10402:
            genre_array[n]="Music"
            n=n+1
            break;
        case 9648:
            genre_array[n]="Mystery"
            n=n+1
            break;
        case 10749:
            genre_array[n]="Romance"
            n=n+1
            break;
        case 878:
            genre_array[n]="Science Fiction"
            n=n+1
            break;
        case 53:
            genre_array[n]="Thriller"
            n=n+1
            break;
        case 10752:
            genre_array[n]="War"
            n=n+1
            break;
        case 37:
            genre_array[n]="Western"
            n=n+1
            break;
        default:
            break;
    }
})
    return(
        <div className="desc">
            <br />
<img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" className="picdesc" ></img>

            <h3 >{movie?.title}</h3>
            <h4>{movie?.overview}</h4>
            {genre_array.map(id=>
            <h4 className="genre">{id}</h4>)}
            Release date:
            <h4 className="date">{movie?.release_date}</h4>
            <br />
            <br />
            <br />
            <button className="book"><b>BOOK NOW</b></button>
        </div>
    );
}
export default Desc;
