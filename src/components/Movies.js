import React from 'react';
import MoviesPoster from './MoviesPoster';
import MoviesInfo from './MoviesInfo';
import MoviesOverview from './MoviesOverview';

const Movie = ({ title, poster_path, overview, vote_average, release_date, vote_count}) => {
    return (
        <button className="movie" onClick={console.log("hey")}>
            <MoviesPoster poster_path={poster_path} title={title}/>  
            <MoviesInfo title={title} vote_average={vote_average}/>
            <MoviesOverview overview={overview} release_date={release_date} vote_count={vote_count}/>
        </button>
    );
};

export default Movie;