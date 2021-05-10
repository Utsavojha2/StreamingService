import React from 'react'
import fetchMovies from '../features/fetchResults';
import './Nav.css';

const Nav = ({getMovies}) => {
    return (
        <div className="nav">
            <h2 onClick={() => getMovies(fetchMovies.fetchTrending)}>
                Trending
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchTopRated)}>
                Top Rated
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchAction)}>
                Action
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchComedy)}>
                Comedy
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchRomance)}>
                Romance
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchHorrorMovies)}>
                Horror
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchMystery)}>
                Mystery
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchScifi)}>
                Sci-fi
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchWestern)}>
                Western
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchAnimation)}>
                Animation
            </h2>
            <h2 onClick={() => getMovies(fetchMovies.fetchTV)}>
                TV Shows
            </h2>
        </div>
    )
}

export default Nav
