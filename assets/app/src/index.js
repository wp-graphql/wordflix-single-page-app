import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import MoviesPage from './components/MoviesPage';

/**
 * NOTE: This imports the entire Ant Design CSS, which is overkill. . .I would recommend only importing the parts
 * that you actually need, but this is fast to get up and running.
 */
import 'antd/dist/antd.css';
import './styles/style.css';


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
