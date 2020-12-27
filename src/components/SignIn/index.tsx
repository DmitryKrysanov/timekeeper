import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Card, CardRow, CardTitle} from '../UI/Card';
import {Form, FormRow} from '../UI/Form';
import PrimaryButton from '../UI/PrimaryButton';
import TextField from '../UI/TextField';
import {Container, Hint} from './styles/SignIn';

export default function SignIn(): JSX.Element {
  const onSubmit = () => {};
  return (
    <Container>
      <Card>
        <CardTitle>Sign In</CardTitle>
        <Form>
          <FormRow>
            <TextField variant="filled" label="Email" />
          </FormRow>
          <FormRow>
            <TextField variant="filled" label="Password" />
          </FormRow>
          <FormRow>
            <p>Need help?</p>
            <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
          </FormRow>
          <PrimaryButton
            color="primary"
            variant="contained"
            onClick={onSubmit}
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
