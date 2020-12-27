import styled from 'styled-components';

export const Columns = styled.div<{columns?: number}>`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns || 1}, 1fr);
  column-gap: 16px;
`;
