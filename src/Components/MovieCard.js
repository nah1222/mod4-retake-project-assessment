import React from 'react';

class MovieCard extends React.Component{

    clickHandler = () => {
        this.props.clickHandler(this.props.movie)
    }
    render(p){
        // console.log(this.props.movie)
        return(
            <div className= "card">
                <h3 onClick={this.clickHandler}>{this.props.movie.title}</h3>
            </div>
        );
    };
};
export default MovieCard;