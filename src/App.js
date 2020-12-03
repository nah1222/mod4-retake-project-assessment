// import logo from './logo.svg';

import React from 'react';
import './App.css';
import MovieList from "./Containers/MovieList";
import RentedMovies from "./Containers/RentedMovies"


class App extends React.Component{

  state = {
    api:[],
    rented:[]
  }

  movieCart = (movie) => {
    this.setState({rented:[...this.state.rented, movie]})
    // console.log(this.state.rented)
  }

  componentDidMount(){
    fetch('http://localhost:5000/movies')
    .then(resp => resp.json())
    .then(data =>this.setState({api:data}))
  }

  render(){
    return(
      <div className="app">
        <RentedMovies rented={this.state.rented}/>
        <MovieList api={this.state.api} clickHandler={this.movieCart}/>
      </div>
    )
  }
}

export default App;
