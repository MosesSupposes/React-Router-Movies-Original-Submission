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

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
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
