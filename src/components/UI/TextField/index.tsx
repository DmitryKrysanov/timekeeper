import React from 'react';
import TextField from '@material-ui/core/TextField';

interface ITextField {
  variant: 'standard' | 'filled' | 'outlined' | undefined;
  label: string;
  name: string;
  defaultValue?: string;
  onChange?: (event: any) => void;
  errorMessage?: string | undefined;
  register?: any;
  type?: 'text' | 'password';
}

export default function PrimaryTextField({
  errorMessage,
  register,
  name,
  ...restProps
}: ITextField) {
  return (
    <TextField
      name={name}
      fullWidth
      {...restProps}
      error={errorMessage ? true : false}
      helperText={errorMessage ? errorMessage : null}
      ref={register}
    />
  );
}
