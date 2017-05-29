import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { ApolloProvider } from 'react-apollo';
import { syncHistoryWithStore } from 'react-router-redux';
import { client, configureStore } from './state';
import HomePage from './components/HomePage';
import PageLayout from './components/PageLayout';
import MoviePage from './components/MoviePage';
import MoviesPage from './components/MoviesPage';

/**
 * NOTE: This imports the entire Ant Design CSS, which is overkill. . .I would recommend only importing the parts
 * that you actually need, but this is fast to get up and running.
 */
import 'antd/dist/antd.css';
import './styles/style.css';

/**
 * Configure the store & history so Apollo/Redux/Router know what's going on in the app
 */
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


/**
 * This is the only component we actually render directly to the DOM!
 */
class App extends Component {
  render() {
    return(
      <ApolloProvider store={store} client={client}>
        <Router history={history} render={applyRouterMiddleware(useScroll())}>
          <Route component={PageLayout} >
            <Route path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId" component={MoviePage} />
          </Route>
          <Route path="*" component={HomePage} />
        </Router>
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
