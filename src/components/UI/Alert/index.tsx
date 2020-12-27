import React from 'react';
import {Container} from './styles/Alert';

interface IAlert {
  message: string;
  type: 'error' | 'success';
}

export default function Alert({message, type}: IAlert) {
  return <Container type={type}>{message}</Container>;
}
