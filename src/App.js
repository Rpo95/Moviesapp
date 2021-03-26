import './App.css';
import Header from './components/header/header';
import Movie from './components/movie/movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieApi from './networking/movie.api';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getPopularMovies()
  }, [])

  const getPopularMovies=()=>{
      let movieApi=new MovieApi();
      movieApi.getPopularMovies()
        .then(res => {
          setMovies(res.data.results)
        })
        .catch(error => {
          console.log(error)
        });
  }

  return (
    <div className="main-container h-100">
        <Header/>
        <div className="row movies-container">
          {movies.map(movie=>{
            console.log(movie)
            return (
              <Movie image={movie.backdrop_path} key={movie.id} title={movie.title} releaseDate={movie.release_date} voteAverage={movie.vote_average}/>
            )
          })}
        </div>
    </div>
  );
}

export default App;
