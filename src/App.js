import React from 'react';
import Movie from './components/Movies';
import Login from './components/Login';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {movies : [], searchValue : ''};
  };

  componentDidMount = () =>{
    fetch('/api')
    .then(res => res.json())
    .then((data) => {
      this.setState({movies : data.results});
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    
    const SEARCH_MOVIES_API = "http://api.themoviedb.org/3/search/movie?&api_key=61cec280feda32b806f9f3187c008707&query=";

    if(this.searchValue !== ''){
      fetch(SEARCH_MOVIES_API + this.state.searchValue)
      .then(res => res.json())
      .then((data) => {this.setState({movies : data.results});});
      
      this.setState({searchValue : ''});
    }

    // if(this.searchValue !== ''){
    //   fetch('/api/Search', {
    //     method : 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(this.state.searchValue)
    //   }).then(res => res.json())
    //   .then((data) => {this.setState({movies : data.results});});
      
    //   this.setState({searchValue : ''});
    // }
}

  handleOnChange = (event) => {
    this.setState({searchValue : event.target.value});
  }

  render(){
    return(
      <>
        <header>
          <button className="homeMovies" onClick={this.componentDidMount}>Movies</button>
          <form onSubmit={this.handleOnSubmit}>
            <input className="search" type="search" placeholder="Search Movies" value={this.state.searchValue} onChange={this.handleOnChange}/>
          </form>
          <Login action="Sign In"/>
        </header>

        <div className="movie-container">
          {this.state.movies.length > 0 && this.state.movies.map(movie => <Movie {...movie}/>)}
        </div>
      </>
    );
  };

}

export default App;