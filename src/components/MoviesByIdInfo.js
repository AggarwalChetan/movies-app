
import React from 'react';
import MoviesPoster from './MoviesPoster';
import MoviesInfo from './MoviesInfo';
import MoviesRate from './MoviesRate';

class MoviesByIdInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies : [], id : 522938};
  };

  // for home page
  componentDidMount = (props) => {
    fetch('/api/searchById', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({id : this.props.id})
      }).then(res => res.json())
      .then((data) => {this.setState({movies : data});});
  }

  render() {
    return (
      <>
      <div className="movieByIdContainer">
        <div className="movieById">
          <MoviesPoster poster_path={this.state.movies.poster_path} title={this.state.movies.title} />
          <MoviesInfo title={this.state.movies.title} vote_average={0} />
        </div>
        <div className="movieByIdInfo">
            <ul>
            <li className="overview"><div>Overview</div></li>
            <li><div>{this.state.movies.overview}</div></li>
            <li><div>{this.state.movies.title}</div></li>
            <li><div>{this.state.movies.vote_average}</div></li>
            <li><div>{this.state.movies.vote_count}</div></li>
            <li><div>{this.state.movies.release_date}</div></li>
            <li><div>{this.state.movies.tagline}</div></li>
            </ul>
            
        </div>
      </div>
      
{/*       
      </div> */}
      </>
    );
  };

}


export default MoviesByIdInfo;