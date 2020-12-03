import React from 'react';
import MovieCard from "../Components/MovieCard"
import SearchForm from "../Components/SearchForm"

class MovieList extends React.Component{

    state = {
        searchValue:""
    }
    renderMovies = () => {
        let filteredApi = this.props.api.filter(el => el.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
         return filteredApi.map(movie => <MovieCard key={movie.id} movie={movie} clickHandler={this.props.clickHandler}/>)
    }
    changeHandler =(e) => {
        this.setState({searchValue: e.target.value})
        // console.log(e)
    }
    render(){
        console.log(this.state.searchValue)
        return(
            <div className="list">
                <SearchForm changeHandler={this.changeHandler}/>
                {this.renderMovies()}
            </div>
        )
    }
}
export default MovieList;