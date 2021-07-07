import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
// import AddMovie from './AddMovie';



export default class MovieList extends Component {
  constructor(props) {
    super(props);
    console.log('Movielist props', props)
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => { 
        this.setState({ movies: res.data });
        
      })
      .catch(err => console.log(err.response));
  }

  // addMovie = newMovie => {
    
  //   axios
  //     .post("http://localhost:5000/api/movies", newMovie)
  //     .then(response => {
  //       console.log( "post", response)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  
  render() {
    return (
      <div className="movie-list">
        {/* <AddMovie addMovie={this.props.addMovie} /> */}
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
        
      </div>
      
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}


