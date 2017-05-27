import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout } from 'antd';
import styled from 'styled-components';
const { Content } = Layout;

const MenuBar = styled.section`
  background: #ad0000;
  padding: 10px;
  height:auto;
  position:fixed;
  top:0px;
  left:0px;
  width:100%;
  z-index:100;
  >a {
     font-size: 18px;
     line-height: 40px;
     color: white;
     margin: 0 10px;
     &:hover {
        color: black;
     }
  }
`;

/**
 * This creates a div that will be used as the wrapper for the contents of the page.
 * This uses a prop passed to it to generate the background image...say what?
 */
const Wrapper = styled.div`
  background:#000;
  min-height:100vh;
  display:flex;
  justify-content: center;
  align-items:center;
  padding-top:60px;
`;

class PageLayout extends Component {
  render() {
    return(
      <Wrapper>
        <MenuBar>
          <Link to="/">Home</Link>
          <Link to="/movies">Browse Movies</Link>
        </MenuBar>
        <Content>
          {this.props.children}
        </Content>
      </Wrapper>
    )
  }
}

export default PageLayout;