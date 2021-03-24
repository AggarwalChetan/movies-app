import {useHistory} from 'react-router-dom';
import Login from './Login';
import Rate from './Rate';

function MoviesOverview(props) {

    let history = useHistory();

    function handleExplore (){    
        history.push(`/explore-movies/${props.id}`);
    }

    return (
        <div className="movie-over">
            <h2>Overview</h2>
            <h4>{props.release_date}</h4>
            <p>{props.overview}</p>            
            <div className="buttonContainer">
                <Rate value="voteButton" action="Rate"/>
                <button className="exploreMovie" onClick={handleExplore}>Explore</button>
            </div>
            
        </div>
    );
}

export default MoviesOverview;