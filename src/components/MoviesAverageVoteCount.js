function MoviesAverageVoteCount(props){
    const setVoteClass = (vote) => {
        if(vote >= 8){
            return 'green';
        }else if(vote >= 6){
            return 'orange';
        }else{
            return 'red';
        }
    };

    return(
        <span className={`tag ${setVoteClass(props.vote_average)}`}>{props.vote_average}</span>
    );
}

export default MoviesAverageVoteCount;

