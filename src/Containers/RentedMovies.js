import React from 'react';
import MovieCard from '../Components/MovieCard'

class RentedMovies extends React.Component{

    renderRented = () => {
        return this.props.rented.map(movie => <MovieCard key={movie.id} movie={movie}/>)
    }
    render(){
        console.log(this.props.rented)
        return(
            <div className="rented">
                {this.renderRented()}
            </div>
        )
    }
}
export default RentedMovies;