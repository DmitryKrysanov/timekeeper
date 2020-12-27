import React from 'react';
import {Link} from 'react-router-dom';
import {Controller, useForm} from 'react-hook-form';
import * as ROUTES from '../../constants/routes';
import {Card, CardRow, CardTitle} from '../UI/Card';
import {Form, FormRow} from '../UI/Form';
import PrimaryButton from '../UI/PrimaryButton';
import TextField from '../UI/PrimaryTextField';
import {Container, Hint} from './styles/SignIn';
import {ISignInForm} from './types';

export default function SignIn({signIn}: any): JSX.Element {
  const methods = useForm<ISignInForm>();
  const {handleSubmit, control, errors} = methods;

  const onSubmit = (data: ISignInForm) => {
    console.log(data);
  };

  return (
    <Container>
      <Card>
        <CardTitle>Sign In</CardTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Controller
              name="email"
              control={control}
              defaultValue={false}
              rules={{required: 'Email is Required'}}
              render={(props) => {
                return (
                  <TextField
                    variant="filled"
                    label="Email"
                    name="email"
                    onChange={(e) => props.onChange(e.target.value)}
                    errorMessage={errors.email && errors.email.message}
                  />
                );
              }}
            />
          </FormRow>
          <FormRow>
            <Controller
              name="password"
              control={control}
              defaultValue={false}
              rules={{required: 'Password is Required'}}
              render={(props) => {
                return (
                  <TextField
                    variant="filled"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={(e) => props.onChange(e.target.value)}
                    errorMessage={errors.password && errors.password.message}
                  />
                );
              }}
            />
          </FormRow>
          <FormRow>
            <p>Need help?</p>
            <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
          </FormRow>
          <PrimaryButton
            color="primary"
            variant="contained"
            type="submit"
            isLoad={false}
          >
            Sign In
          </PrimaryButton>
        </Form>
      </Card>
      <Hint>
        <Card>
          <CardRow>
            <p>For the first time on our site?</p>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </CardRow>
        </Card>
      </Hint>
    </Container>
  );
}
