import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/**
 * NOTE: This imports the entire Ant Design CSS, which is overkill. . .I would recommend only importing the parts
 * that you actually need, but this is fast to get up and running.
 */
import 'antd/dist/antd.css';
import './styles/style.css';

/**
 * Create a wrapper div that will be used as the container for the page
 */
const Home = styled.div`
  height:100vh;
  background:black;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  >section{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
`;

class HomePage extends Component {
  render() {
    return(
      <Home>
        <h1>WordFlix</h1>
        <h2>Your favorite super-powered Single Page App for browsing Super Hero Movies!</h2>
        <a href="#0">Explore Films</a>
      </Home>
    )
  }
}

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
