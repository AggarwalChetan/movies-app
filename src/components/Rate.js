import React from 'react';
import Modal from 'react-modal';
import Star from './Star';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginFormOpen: false};
    };

    showLogin = () => {
        this.setState({ loginFormOpen: true });
    }
    
    hideLogin = () => {
        this.setState({ loginFormOpen: false })
    }

    render() {
        return (
            <>
                <button className={this.props.value} onClick={this.showLogin}>{this.props.action}</button>
                <Modal className="rating" isOpen={this.state.loginFormOpen}>
                    <div className="ratingContainer">
                         <div className="ratingClosebuttonContainer">
                            <button className="ratingClosebutton" onClick={this.hideLogin}>X</button>
                        </div>
                        <label className="rateThis">RATE THIS</label>
                        <ul className="rateBtnContainer">
                            <li><Star/></li>
                            <li><button>Rate</button></li>                            
                        </ul>
                    </div>
                     
                </Modal>
            </>
        );
    }
}

export default Rate;




