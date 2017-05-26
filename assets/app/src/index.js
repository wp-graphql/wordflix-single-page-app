import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';

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
      <HomePage />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
