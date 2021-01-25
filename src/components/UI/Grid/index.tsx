import styled from 'styled-components';

export const Columns = styled.div<{columns?: number}>`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns || 1}, 1fr);
  column-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
