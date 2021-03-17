import React from 'react';
import Movie from './components/Movies';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], searchValue: ''};
  };

  componentDidMount = () => {
    fetch('/api')
      .then(res => res.json())
      .then((data) => {
        this.setState({ movies: data.results });
      });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    if(this.state.searchValue !== ''){
      fetch('/api/search', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({searchValue : this.state.searchValue})
      }).then(res => res.json())
      .then((data) => {this.setState({movies : data.results});});

      this.setState({searchValue : ''});
    }
  }

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <>
        <header>
          <button className="homeMovies" onClick={this.componentDidMount}>Home</button>
          <form onSubmit={this.handleOnSubmit}>
            <input className="search" type="search" placeholder="Search Movies" value={this.state.searchValue} onChange={this.handleOnChange} />
          </form>
          <Login value="signIn" action="Sign In" />
        </header>

        <div className="movie-container">
          {this.state.movies.length > 0 && this.state.movies.map(movie => <Movie {...movie} />)}
        </div>
      </>
    );
  };

}

export default App;