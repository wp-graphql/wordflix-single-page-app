import React, { Component } from 'react';
import styled from 'styled-components';
import { gql, graphql } from 'react-apollo';

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

    /**
     * This gets the "data" out of the components props
     */
    const { data: { movie, loading } } = this.props;

    /**
     * Configure the posterUrl
     * @type {string}
     */
    let posterUrl = 'http://placehold.it/341x512';
    if ( movie && movie.poster && movie.poster.url ) {
      posterUrl = movie.poster.url;
    }

    if ( loading ) {
      return <div>Loading...</div>;
    } else {
      return (
        <MovieDetails>
          <Poster>
            <img alt={'poster for ' + movie.title } src={ posterUrl } />
          </Poster>
          <MovieContent>
            <h2>{movie.title}</h2>
            <h3>Released: {movie.releaseDate}</h3><br/>
            <div dangerouslySetInnerHTML={ { __html: movie.content } } />
          </MovieContent>
        </MovieDetails>
      );
    }
  }
}

/**
 * Here we query for a single post (movie) by passing the ID as a variable.
 */
const movieQuery = gql`
    query getMovie($id:ID!){
      movie:post(id:$id){
        id
        title
        content
        releaseDate
        poster:featuredImage{
            url:sourceUrl
        }
      }
    }
`;

/**
 * Here, we setup the variables to use in the GraphQL query by getting the ID of the movie from the
 * route (/movies/:movieId). The "movieId" will be used in the query to fetch data to populate
 * the page.
 */
const MoviePageWithData = graphql(movieQuery, {
  options: ({routeParams}) => ({
    variables: {
      id: routeParams && routeParams.movieId ? routeParams.movieId : null,
    }
  })
})(MoviePage);

export default MoviePageWithData;