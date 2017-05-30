import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

/**
 * This is the container that holds the spinner when the page is loading
 */
const LoadingWrapper = styled.div`
  display:flex;
  height:calc(100vh - 60px);
  align-items: center;
  justify-content: center;
`;

const LoadingScreen = () => {
  return(
    <LoadingWrapper>
      <Spin size="large" />
    </LoadingWrapper>
  );
}

export default LoadingScreen;