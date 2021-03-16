import React, { useEffect, useState } from 'react';
import Movie from './components/Movies';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {movies : [], searchValue : ''};
  };

  getMoviesInfo = (MOVIES_API) =>{
    fetch(MOVIES_API)
    .then(res => res.json())
    .then((data) => {
      this.setState({movies : data.results});
    });
  }

  componentDidMount(){
    const DEFAULT_MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=61cec280feda32b806f9f3187c008707&page=1";
    this.getMoviesInfo(DEFAULT_MOVIES_API);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    
    const SEARCH_MOVIES_API = "http://api.themoviedb.org/3/search/movie?&api_key=61cec280feda32b806f9f3187c008707&query=";

    if(this.searchValue != ''){
      fetch(SEARCH_MOVIES_API + this.state.searchValue)
      .then(res => res.json())
      .then((data) => {this.setState({movies : data.results});});
      this.setState({searchValue : ''});
    }
    
}

  handleOnChange = (event) => {
    this.setState({searchValue : event.target.value});
  }

  render(){
    return(
      <>
        <header>
              <form onSubmit={this.handleOnSubmit}>
                    <input className="search" 
                        type="search" placeholder="Search..." 
                        value={this.state.searchValue} 
                    onChange={this.handleOnChange}/>
             </form>
        </header>
        <div className="movie-container">
          {this.state.movies.length > 0 && this.state.movies.map(movie => <Movie {...movie}/>)}
        </div>
      </>
    );
  };

}

export default App;