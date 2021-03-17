import React from 'react';
import MoviesPoster from './MoviesPoster';
import MoviesInfo from './MoviesInfo';
import MoviesOverview from './MoviesOverview';

const Movie = ({ title, poster_path, overview, vote_average, release_date, vote_count }) => {
    return (
        <div className="movie">
            <MoviesPoster poster_path={poster_path} title={title} />
            <MoviesInfo title={title} vote_average={0} />
            <MoviesOverview overview={overview} release_date={release_date} vote_count={0} />
        </div>
    );
};

export default Movie;