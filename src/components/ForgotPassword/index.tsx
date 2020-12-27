import React from 'react';
import {Link} from 'react-router-dom';
import {Controller, useForm} from 'react-hook-form';
import * as ROUTES from '../../constants/routes';
import {Card, CardRow, CardTitle} from '../UI/Card';
import {Form, FormRow} from '../UI/Form';
import PrimaryButton from '../UI/PrimaryButton';
import TextField from '../UI/PrimaryTextField';
import {Container, Hint, Tip} from './styles/ForgotPassword';
import {IForgotPasswordForm} from './types';

export default function ForgotPassword() {
  const methods = useForm<IForgotPasswordForm>();
  const {handleSubmit, control, errors} = methods;

  const onSubmit = (data: IForgotPasswordForm) => {
    console.log(data);
  };

  return (
    <Container>
      <Card>
        <CardTitle>Forgot Password</CardTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Controller
              name="email"
              control={control}
              rules={{required: 'Email is Required'}}
              defaultValue={null}
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
          <Tip>
            Enter your email address and we will send you a link to reset your
            password.
          </Tip>
          <PrimaryButton
            color="primary"
            variant="contained"
            type="submit"
            isLoad={false}
          >
            Sent password reset email
          </PrimaryButton>
        </Form>
      </Card>
      <Hint>
        <Card>
          <CardRow>
            <p>I remembered the password.</p>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </CardRow>
        </Card>
      </Hint>
    </Container>
  );
}
