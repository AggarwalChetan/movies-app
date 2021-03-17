import React from 'react';
import { useHistory } from 'react-router';
import Login from './Login';

function ExploreMovies (){
    let history = useHistory();

    function handleExplore (){    
        history.push('/');
    }
    
    return (<>
            <header>
              <button className="homeMovies" onClick={handleExplore}>Home</button>
              <Login value="signIn" action="Sign In" />
            </header>
          </>);
}

export default ExploreMovies;