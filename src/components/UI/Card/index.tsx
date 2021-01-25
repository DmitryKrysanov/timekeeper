import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  background-color: #fff;
`;

export const CardTitle = styled.h2`
  margin-bottom: 16px;
`;

export const CardRow = styled.div<{mb?: number}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({mb}) => `${mb}px` || 0};
`;
