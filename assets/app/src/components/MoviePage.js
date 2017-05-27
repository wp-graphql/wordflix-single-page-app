import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * This is the div that contains the Details about the movie (poster, title, description, etc)
 */
const MovieDetails = styled.div`
  background:rgba( 255,255,255,0.8 );
  max-width: 80%;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:row;
  padding:25px 50px;
  margin:auto;
  color: #222;
  >div{
    flex:1;
  }
`;

/**
 * This is the div that contains the poster
 */
const Poster = styled.div`
  max-width:35%;
  min-width:200px;
  background:white;
  padding:10px;
  >img{
    max-width:100%;
  }
`;

/**
 * This is the div that contains the MovieContent (title, description)
 */
const MovieContent = styled.div`
  padding: 50px;
  font-size: 18px;
  line-height: 24px;
  >h2{
    margin-bottom:15px;
  }
`;

class MoviePage extends Component {
  render() {
    return(
      <MovieDetails>
        <Poster>
          <img alt={'poster for Movie Title'} src="http://placehold.it/341x512" />
        </Poster>
        <MovieContent>
          <h2>Movie Title</h2>
          <h3>Released: realease date</h3><br/>
          <div>Movie description</div>
        </MovieContent>
      </MovieDetails>
    );
  }
}

export default MoviePage;