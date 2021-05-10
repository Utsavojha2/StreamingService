const key = '04c35731a5ee918f014970082a0088b1';
export const movieLink = 'https://api.themoviedb.org/3';

const fetchMovies = {
    fetchTrending : `/trending/all/week?api_key=${key}&langauge=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${key}&langauge=en-US`,
    fetchAction : `/discover/movie?api_key=${key}&with_genres=28`,
    fetchComedy : `/discover/movie?api_key=${key}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${key}&with_genres=27`,
    fetchRomance : `/discover/movie?api_key=${key}&with_genres=10749`,
    fetchMystery : `/discover/movie?api_key=${key}&with_genres=9648`,
    fetchScifi : `/discover/movie?api_key=${key}&with_genres=878`,
    fetchWestern : `/discover/movie?api_key=${key}&with_genres=37`,
    fetchAnimation : `/discover/movie?api_key=${key}&with_genres=16`,
    fetchTV : `/tv/popular?api_key=${key}&language=en-US&page=1`,
    fetchMovieVideo : id => `/movie/${id}/videos?api_key=${key}&language=en-US`,
    fetchTvVideo : (id) => `/tv/${id}/videos?api_key=${key}&language=en-US`
}

export default fetchMovies;



