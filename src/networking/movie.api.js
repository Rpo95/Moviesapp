import {client} from './networking';

class MovieApi{
    getPopularMovies=()=>{
        return client.get('/movie/popular?api_key=29823e92e78376419c277d6a5763a21c')
    }
}

export default MovieApi;