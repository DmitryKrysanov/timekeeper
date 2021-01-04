import React from 'react';
import {Container} from './styles/Dialog';

interface IDialogContainer {
  open: boolean;
  onClose: () => void;
  children: any;
}

export default function DialogContainer({
  open,
  onClose,
  children,
}: IDialogContainer) {
  return (
    <Container maxWidth="sm" fullWidth open={open} onClose={onClose}>
      {children}
    </Container>
  );
}
