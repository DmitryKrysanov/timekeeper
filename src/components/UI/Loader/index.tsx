import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface ILoader {
  color: 'primary' | 'secondary' | 'inherit' | undefined;
  size?: string | number;
}

export default function Loader({...restProps}: ILoader): JSX.Element {
  return <CircularProgress {...restProps} />;
}
