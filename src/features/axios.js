import axios from 'axios';
import {movieLink} from '../features/fetchResults';

export const instance = axios.create({
    baseURL : movieLink
})



