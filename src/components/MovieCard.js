import React from 'react'
import './MovieCard.css';

const MovieCard = ({poster_path,backdrop_path,title,name,original_name,release_date,overview, first_air_date, setCurrentID}) => {
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    return (
        <div className="movieCard">
            <img src={`${imgPath}${poster_path || backdrop_path}`} alt={title} />
            <button className="streamButton">Stream Now</button>
            <div className="movieCard__single">
                <p>{overview.substr(0,53)}...</p>
                <h2>{title || name || original_name}</h2>
                <p>{release_date || first_air_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;

