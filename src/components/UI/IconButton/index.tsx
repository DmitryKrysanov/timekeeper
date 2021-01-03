import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Loader from '../Loader';

interface IPrimaryIconButton {
  isLoad: boolean;
  children: any;
  color: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  onClick?: () => void;
}

export default function PrimaryIconButton({
  isLoad,
  children,
  ...restProps
}: IPrimaryIconButton): JSX.Element {
  return (
    <IconButton {...restProps}>
      {isLoad ? <Loader color="inherit" size={24} /> : children}
    </IconButton>
  );
}
