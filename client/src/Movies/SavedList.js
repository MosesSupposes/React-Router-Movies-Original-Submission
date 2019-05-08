import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { removeFromSavedList } = this.props
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(renderNavLink({removeFromSavedList}))}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}

function renderNavLink(props) {
  return function mapperFn(movie, i) {
    return <NavLink {...props} key={i} movie={movie} />
  }
}