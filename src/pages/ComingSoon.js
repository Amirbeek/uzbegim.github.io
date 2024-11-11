import React from 'react';
import styled from 'styled-components';

const ComingSoonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #343a40;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
  margin-top: 1rem;
`;

const ComingSoon = () => (
    <ComingSoonContainer>
        <Title>Our Website is Coming Soon!</Title>
        <Subtitle>We're working hard to bring you the best experience.</Subtitle>
    </ComingSoonContainer>
);

export default ComingSoon;
