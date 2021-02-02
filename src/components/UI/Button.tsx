import React from 'react';
import styled, {css} from 'styled-components/macro';
import IconButton from '@material-ui/core/IconButton';

interface ICircleBtn {
  children: any;
  color: 'primary' | 'start' | 'stop' | 'transparent';
  disabled?: boolean;
  onClick: () => void;
}

export function CircleBtn({children, ...restProps}: ICircleBtn) {
  return <CircleBtnContainer {...restProps}>{children}</CircleBtnContainer>;
}

const CircleBtnContainer = styled.button<{color: string}>`
  width: 56px;
  height: 56px;

  background-color: #2ebc4f;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #208337;
  }

  ${({color}) =>
    color === 'stop' &&
    css`
      background-color: #b00020;

      &:hover {
        background-color: #8d011b;
      }
    `}
  ${({color}) =>
    color === 'transparent' &&
    css`
      background-color: transparent;
    `}
`;

interface IIconBtn {
  children: any;
  onClick?: any;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function IconBtn({children, ...restProps}: IIconBtn) {
  return <IconButton {...restProps}>{children}</IconButton>;
}
