import React, { Component } from 'react';
import { Link } from 'react-router';

class MoviePage extends Component {
  render() {
    return(
      <div>
        <h1>This is the movie detail page</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/movies">Movies List Page</Link>
      </div>
    );
  }
}

export default MoviePage;