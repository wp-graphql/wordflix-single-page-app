import React, { Component } from 'react';
import { Link } from 'react-router';

class MoviesPage extends Component {
  render() {
    return(
      <div>
        <h1>This is the movies list page</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/movies/some-movie-id">Movie Details Page</Link>
      </div>
    );
  }
}

export default MoviesPage;