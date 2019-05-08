import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    // Do nothing if the movie is already in the list
    if (this.state.savedList.includes(movie)) {
      return
    }

    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  removeFromSavedList = movie => {
    console.log('removing from saved list')
    this.state.savedList.includes(movie) && this.setState({ 
      savedList: this.state.savedList.filter(m =>  m.id !== movie.id)
    })
  }

  render() {
    return (
      <div>
        <SavedList 
          list={this.state.savedList} 
          removeFromSavedList={this.removeFromSavedList} 
        />
        <Route path="/"
               render={(props) => 
                <MovieList {...props} addToSavedList={this.addToSavedList} />} 
        >
        </Route>
        <Route 
          path="/movies/:id" 
          render={(props) => 
            <Movie {...props} addToSavedList={this.addToSavedList} />} 
        >
        </Route>
      </div>
    );
  }
}
