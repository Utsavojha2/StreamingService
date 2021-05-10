import React,{useState,useEffect} from 'react'
import './VideoPlayer.css';
import CancelIcon from '@material-ui/icons/Cancel';
import {useHistory} from 'react-router-dom';
import {instance} from '../features/axios';
import fetchMovies from '../features/fetchResults';

const VideoPlayer = ({id, type, movies}) => {
    const [key,setKey] = useState(null);
    const [genre,setGenre] = useState(null);
    const history= useHistory();
    const current = movies.find(el => el.id === +id);
    console.log(current);

    const handleModal = (e) => {
        if(e.target.classList.contains('videoPlayer')){
            history.push('/');
        }
    }  

    useEffect(() => {
        const getVideos = async() => {
            let response = await instance.get(fetchMovies.fetchMovieVideo(id));
            if(!response.data.results.length){
                response = await instance.get(fetchMovies.fetchTvVideo(id));
            }
            let keyResult = response.data.results[1];
            setKey(!keyResult ? response.data.results[0].key : response.data.results[1].key)
        }
        getVideos();
    }, [id,type])

    return (
        <div onClick={handleModal} className="videoPlayer">
            <div className="videoPlayer__modal">
                <CancelIcon className="closeModal" onClick={() => history.push('/')} />
                <iframe className="videoPlayer__modalPlayer" src={`https://www.youtube.com/embed/${key}?autoplay=1&cc_load_policy=1`} allowFullScreen frameBorder="0" allow="autoplay; encrypted-media"/>
            </div>
        </div>
    )
}


export default VideoPlayer;

