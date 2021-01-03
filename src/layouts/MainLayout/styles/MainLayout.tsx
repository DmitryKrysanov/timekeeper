import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'aside header'
    'aside content';
  grid-template-columns: 202px 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 0 1fr;
  }
`;

export const Content = styled.div`
  grid-area: content;
`;
