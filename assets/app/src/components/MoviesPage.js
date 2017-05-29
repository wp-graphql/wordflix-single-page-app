import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Row, Col, Card } from 'antd';
import { gql, graphql } from 'react-apollo';

/**
 * Create a styled H1 component
 */
const PageTitle = styled.h1`
  font-family: avengeance_mightiest_avengeRg;
  font-size: 48px;
  line-height: 50px;
  text-align:center;
  padding:20px;
  margin-top:40px;
  color:white;
`;

/**
 * Create a styled div to serve as the wrapper for the movies list
 */
const MoviesWrapper = styled.div`
  max-width: 80%;
  padding:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin:auto;
  margin-bottom: 50px;
`;

/**
 * Create a styles h2 to use as the movie title for individual movies
 */
const MovieTitle = styled.h2`
  color: black;
  font-size: 16px;
  line-height: 24px;
  font-family:avengeance_mightiest_avengeRg;
  padding:10px;
`;

class MovieCard extends Component {

  /**
   * Render a Card component with the Movie poster and title
   */
  render() {
    return(
      <Card style={{marginBottom: '40px', flex:1}} bodyStyle={{ padding: 0 }}>
        <Link to="movies/movieId" >
          <div>
            <img src="http://placehold.it/236x332" alt="poster for movie title"/>
            <MovieTitle>Movie Title</MovieTitle>
          </div>
        </Link>
      </Card>
    );
  }
}

class MoviesPage extends Component {
  render() {
    return(
      <div>
        <PageTitle>Movies</PageTitle>
        <MoviesWrapper>
          <Row gutter={40} type="flex" justify="space-between" align="center">
            <Col xs={24} sm={12} md={8} lg={6}>
              <MovieCard />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <MovieCard />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <MovieCard />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <MovieCard />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <MovieCard />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <MovieCard />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <MovieCard />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <MovieCard />
            </Col>
          </Row>
        </MoviesWrapper>
      </div>
    );
  }
}

/**
 * Write the GraphQL query to get the list of movies.
 */
const moviesQuery = gql`
  query moviesList{
    posts {
      edges {
        node {
          id
          title
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

/**
 * Connect the GraphQL query with our MoviesPage component
 */
const MoviesPageWithData = graphql(moviesQuery)(MoviesPage);

/**
 * Export our component that is connected to Apollo
 */
export default MoviesPageWithData;