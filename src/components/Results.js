import React from 'react'
import MovieCard from './MovieCard';
import './Results.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';

const Results = ({loading,movies}) => {
    console.log(movies);
    return loading ? <CircularProgress className="loader" color="secondary" /> : (
        <div className="results">
            {movies.map(el => {
               return (
               <Link key={el.vote_count} to={`/${el.media_type}/${el.id}`}>
                   <MovieCard {...el} />
                </Link>
               )
            })}
        </div>
    )
}

export default Results;



