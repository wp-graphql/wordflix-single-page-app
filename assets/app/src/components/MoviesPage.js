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

/**
 * Create a styled div used for loading more items
 */
const LoadMore = styled.div`
  background:#ad0000;
  color:white;
  border-radius:25px;
  text-align:center;
  font-size: 25px;
  line-height: 40px;
  padding: 10px 20px;
  font-family:TTFirsMedium;
  margin: 0 auto 50px;
  &:hover{
    background:#0087be;
  }
  display:inline-block;
  cursor:pointer;
`;

class MovieCard extends Component {

  /**
   * Render a Card component with the Movie poster and title
   */
  render() {

    /**
     * Get the movie from the props that were passed to the component
     */
    let { movie } = this.props;

    /**
     * Set the posterUrl using placehold.it as a fallback
     * @type {string}
     */
    let posterUrl = 'http://placehold.it/236x332';
    if ( movie.poster && movie.poster.url ) {
      posterUrl = movie.poster.url;
    }

    return(
      <Card style={{marginBottom: '40px', flex:1}} bodyStyle={{ padding: 0 }}>
        <Link to={"movies/" + movie.id } >
          <div>
            <img src={posterUrl} width="100%" alt={"poster for " + movie.title}/>
            <MovieTitle>{movie.title}</MovieTitle>
          </div>
        </Link>
      </Card>
    );
  }
}

class MoviesPage extends Component {

  loadMoreButton( pageInfo, loadMoreEntries ) {
    if ( pageInfo.hasPreviousPage ) {
      return ( <LoadMore onClick={ loadMoreEntries }>Load More</LoadMore> );
    }
  }

  render() {

    /**
     * Get the data out of the props. "data" is a prop that Apollo provides
     * which includes the data returned from the GraphQL query
     */
    let { data: { loading, movies, loadMoreEntries } } = this.props;

    /**
     * Apollo sets data.loading to true if the query is being fetched an we're waiting for data
     * to be returned. If this is the case, we can show the user some feedback that
     * the content is loading. And if it's not loading, we can render the actual data.
     */
    if ( loading ) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <PageTitle>Movies</PageTitle>
          <MoviesWrapper>
            <Row gutter={40} type="flex" justify="space-between" align="center">
              {
                movies.edges.map((edge, i) => {
                  return (
                    <Col key={i} xs={24} sm={12} md={8} lg={6}>
                      <MovieCard movie={edge.movie} key={i}/>
                    </Col>
                  )
                })
              }
            </Row>
            <Row>
              {this.loadMoreButton(movies.pageInfo, loadMoreEntries)}
            </Row>
          </MoviesWrapper>
        </div>
      );
    }
  }
}

/**
 * Write the GraphQL query to get the list of movies.
 */
const moviesQuery = gql`
  query moviesList($cursor: String) {
    movies:posts(last: 20, before:$cursor) {
      pageInfo {
        startCursor
        hasPreviousPage
      }
      edges {
        movie:node {
          id
          title
          poster:featuredImage {
            url:sourceUrl
          }
        }
      }
    }
  }
`;

/**
 * Connect the GraphQL query with our MoviesPage component
 */
const MoviesPageWithData = graphql(moviesQuery, {

  props({
    data: {
      loading,
      movies,
      fetchMore
    }
  }) {

    /**
     * Return the props to connect to the component
     */
    return {
      data: {
        loading,
        movies,
        fetchMore,
        loadMoreEntries: () => {
          return fetchMore({
            query: moviesQuery,
            variables: {
              cursor: movies.pageInfo.startCursor
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {

              /**
               * Pluck the new edges out of the query results
               */
              const newEdges = fetchMoreResult.movies.edges;

              /**
               * Pluck the new pageInfo out of the query results
               */
              const pageInfo = fetchMoreResult.movies.pageInfo;

              /**
               * Return the movies with the new edges merged with the existing ones, and
               * the new pageInfo replacing the old pageInfo
               */
              return {
                movies: {
                  edges: [...previousResult.movies.edges, ...newEdges],
                  pageInfo,
                },
              };
            },
          });
        }
      }
    }
  },

})(MoviesPage);

/**
 * Export our component that is connected to Apollo
 */
export default MoviesPageWithData;