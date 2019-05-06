import React, { Component } from 'react';
import MovieCard from './MovieCard'
import axios from 'axios';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    const { addToSavedList } = this.props
    return (
      <div className="movie-list">
        {
          this.state.movies.map(renderMovieCard({addToSavedList}))
        }
      </div>
    );
  }
}

function renderMovieCard(props) {
  return function mapperFn(movie, i) {
    return <MovieCard 
              {...props}
              key={i} 
              movie={movie} 
            />
  }
}

