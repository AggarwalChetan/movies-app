import React from 'react';
import { FaStar } from 'react-icons/fa';

class Star extends React.Component{
    constructor(props){
        super(props);
        this.state = {rating : 0, hover : 0};
    }

    handleSetRating = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
        <div>{[ ...Array(10)].map((star, index) => 
            {
                let ratingValue = index + 1;
                return (
                <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={this.handleSetRating}/>
                    <FaStar name="hover" className="starRating" color={ratingValue <= (this.state.hover || this.state.rating) ? "yellow" : "grey"} size={25} 
                        onMouseEnter ={this.handleSetRating} 
                        onMouseLeave={this.handleSetRating}
                    />
                </label>
                );
            })}
        </div>
        );}
}
export default Star;