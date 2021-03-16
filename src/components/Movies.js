import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280/";
const RANDOM_IMG_API = "https://images.unsplash.com/photo-1611787640592-ebf78080d96e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const setVoteClass = (vote) => {
    if(vote >= 8){
        return 'green';
    }else if(vote >= 6){
        return 'orange';
    }else{
        return 'red';
    }
};

const Movie = ({ title, poster_path, overview, vote_average, release_date, vote_count}) => {
    return (
        <div className="movie">
            <img src={poster_path ? (IMG_API + poster_path) : (RANDOM_IMG_API)} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview</h2>
                <h4>{release_date}</h4>
                <p>{overview}</p>
                <h5>Total Vote Count - {vote_count}</h5>
            </div>
        </div>
    );
};

export default Movie;