import styled from 'styled-components';

export const Row = styled.div<{marginBottom?: number}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({marginBottom}) => `${marginBottom}px` || '0'};
`;
