import UserRating from "./UserRating";

function MoviesOverview(props) {
    return (
        <div className="movie-over">
            <h2>Overview</h2>
            <h4>{props.release_date}</h4>
            <p>{props.overview}</p>            
            <h5>Total Vote Count - {props.vote_count}</h5>
            <UserRating/>
        </div>
    );
}

export default MoviesOverview;