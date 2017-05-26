import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router';

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

/**
 * Component that styles the homepage title
 */
const HomeTitle = styled.h1`
  font-family: avengeance_mightiest_avengeRg;
  font-size: 72px;
  line-height: 90px;
`;

/**
 * Component that styles the homepage description
 */
const Description = styled.div`
  font-family: TTFirsMedium;
  font-size: 45px;
  line-height: 50px;
  padding: 30px;
  max-width:750px;
  text-align:center;
  margin-bottom:40px;
`;

/**
 * Component that styles the "Explore" button
 */
const ExploreButton = styled.span`
  background:#ad0000;
  color:white;
  border-radius:25px;
  text-align:center;
  font-size: 25px;
  line-height: 40px;
  padding: 10px 20px;
  font-family:TTFirsMedium;
  &:hover{
    background:#0087be;
  }
`;

class HomePage extends Component {
  render() {
    return(
      <Home>
        <section>
          <HomeTitle>WordFlix</HomeTitle>
          <Description>Your favorite super-powered Single Page App for browsing Super Hero Movies!</Description>
          <Link to="/movies">
            <ExploreButton>Explore Films</ExploreButton>
          </Link>
        </section>
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
