import styled, {css} from 'styled-components';

export const Container = styled.div<{type: string}>`
  min-width: 220px;
  padding: 16px;
  color: #fff;
  background-color: green;
  border-radius: 8px;
  -webkit-box-shadow: 0px 8px 16px 0px rgba(50, 50, 50, 0.2);
  -moz-box-shadow: 0px 8px 16px 0px rgba(50, 50, 50, 0.2);
  box-shadow: 0px 8px 16px 0px rgba(50, 50, 50, 0.2);

  position: absolute;
  bottom: 24px;

  ${({type}) =>
    type === 'error' &&
    css`
      background-color: red;
    `}
`;
