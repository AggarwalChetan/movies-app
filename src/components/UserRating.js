import React from 'react';
import Login from './Login';

class UserRating extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loginFormValue: false};
      };
    
      showLogin = () => {
        this.setState({loginFormValue : true});
      }

      render(){
          return(
              <>
                <button className="voteButton" onClick={this.showLogin}>Want to Rate?</button>
                <Login loginFormValue={this.state.loginFormValue}/>
              </>
          );
      }
}

export default UserRating;