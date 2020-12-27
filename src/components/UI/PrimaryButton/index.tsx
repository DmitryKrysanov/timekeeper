import React from 'react';
import Button from '@material-ui/core/Button';
import Loader from '../Loader';

interface IPrimaryButton {
  isLoad: boolean;
  children: any;
  color: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  type: 'button' | 'submit';
  onClick?: () => void;
}

export default function PrimaryButton({
  isLoad,
  children,
  ...restProps
}: IPrimaryButton): JSX.Element {
  return (
    <Button {...restProps}>
      {isLoad ? <Loader color="inherit" size={24} /> : children}
    </Button>
  );
}
