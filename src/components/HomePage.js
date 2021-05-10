import React, {useState, useEffect} from 'react'
import Header from './Header'
import Nav from './Nav'
import Results from './Results'
import fetchMovies from '../features/fetchResults';
import {instance} from '../features/axios';
import VideoPlayer from './VideoPlayer';
import {useParams} from 'react-router-dom';

const HomePage = () => {
    const ans = useParams();
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);

    const getMovies = async(moviegenre) => {
        setLoading(true);
        const response = await instance.get(moviegenre);
        setMovies(response.data.results);
        setTimeout(() => {
            setLoading(false);
        }, 1700)
    }

    useEffect(() => {
        getMovies(fetchMovies.fetchTrending);
    }, [])

    return (
        <div>
            {ans.id && <VideoPlayer {...ans} movies={movies}/>}
            <Header />
            <Nav getMovies={getMovies}/>
            <Results movies={movies} loading={loading} />
        </div>
    )
}

export default HomePage;


