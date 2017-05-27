import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, applyRouterMiddleware, Link } from 'react-router';
import { useScroll } from 'react-router-scroll';
import HomePage from './components/HomePage';

/**
 * NOTE: This imports the entire Ant Design CSS, which is overkill. . .I would recommend only importing the parts
 * that you actually need, but this is fast to get up and running.
 */
import 'antd/dist/antd.css';
import './styles/style.css';

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

/**
 * This is the only component we actually render directly to the DOM!
 */
class App extends Component {
  render() {
    return(
      <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MoviePage} />
        <Route path="*" component={HomePage} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
