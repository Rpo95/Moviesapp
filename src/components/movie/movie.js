import React from 'react';
import './movie.css'

const Movie = props => {
    return(
        <div className="col-auto movie-container">
            <div className="row">
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${props.image}`}/>
            </div>
            <div className="row">
                <p className="movie-title">{props.title} </p>
            </div>
            <div className="row ">
                <div className="col-8 pl-0">
                    <p className="movie-info">{props.releaseDate} </p>
                </div>
                <div className="col-4 p-0">
                    <p className="movie-type">{props.voteAverage}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie;