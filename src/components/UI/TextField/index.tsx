import React from 'react';
import TextField from '@material-ui/core/TextField';

interface ITextField {
  variant: 'standard' | 'filled' | 'outlined' | undefined;
  label: string;
  defaultValue?: string;
  onChange?: (event: any) => void;
  error?: string;
}

export default function PrimaryTextField({error, ...restProps}: ITextField) {
  return (
    <TextField
      {...restProps}
      error={error ? true : false}
      helperText={error ? error : null}
    />
  );
}
