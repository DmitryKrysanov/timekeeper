import React from 'react';
import styled, {css} from 'styled-components';

interface IAlert {
  message: string;
  type: 'error' | 'success';
}

export default function Alert({message, type}: IAlert) {
  return <Container type={type}>{message}</Container>;
}

const Container = styled.div<{type: string}>`
  min-width: 220px;
  padding: 16px;
  color: #fff;
  background-color: green;
  border-radius: 8px;
  -webkit-box-shadow: 0px 8px 16px 0px rgba(50, 50, 50, 0.2);
  -moz-box-shadow: 0px 8px 16px 0px rgba(50, 50, 50, 0.2);
  box-shadow: 0px 8px 16px 0px rgba(50, 50, 50, 0.2);

  position: absolute;
  left: 50%;
  bottom: 24px;
  z-index: 1000;
  transform: translateX(-50%);

  ${({type}) =>
    type === 'error' &&
    css`
      background-color: red;
    `};
`;
