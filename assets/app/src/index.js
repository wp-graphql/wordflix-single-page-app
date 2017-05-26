import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * This is the only component we actually render directly to the DOM!
 */
class App extends Component {
  render() {
    return(
      <h1>WordFlix, your friendly super powered single page app!</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
