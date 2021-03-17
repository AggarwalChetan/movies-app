import React from 'react';
import Modal from 'react-modal';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginFormOpen: false, email: '', password: '' };
    };

    showLogin = () => {
        this.setState({ loginFormOpen: true });
    }
    
    hideLogin = () => {
        this.setState({ loginFormOpen: false })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <>
                <button className={this.props.value} onClick={this.showLogin}>{this.props.action}</button>
                <Modal className="login" isOpen={this.state.loginFormOpen}>
                    <div className="loginContainer">
                        <div className="closebuttonContainer">
                            <button className="closebutton" onClick={this.hideLogin}>X</button>
                        </div>
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                        <div className="btnContainer">
                            <>
                                <button>Sign Up</button>
                                <p>Don't have an account ? <span>Sign In</span></p>
                            </>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Login;




