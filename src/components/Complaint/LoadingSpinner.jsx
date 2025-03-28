import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 50%;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}

export default LoadingSpinner;