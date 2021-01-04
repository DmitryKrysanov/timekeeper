import styled from 'styled-components';

export const ColorList = styled.ul`
  display: flex;
  align-items: center;
`;

export const ColorItem = styled.li<{color: string; active: boolean}>`
  width: 24px;
  height: 24px;
  display: block;
  background-color: ${({color}) => (color ? color : '#fff')};
  border-radius: 4px;
  border: ${({active}) => (active ? '2px solid #212121' : '2px solid #fff')};

  margin-right: 8px;
`;
