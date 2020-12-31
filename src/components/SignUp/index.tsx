import React from 'react';
import {Link} from 'react-router-dom';
import {Controller, useForm} from 'react-hook-form';
import * as ROUTES from '../../constants/routes';
import {Card, CardRow, CardTitle} from '../UI/Card';
import {Form, FormRow} from '../UI/Form';
import PrimaryButton from '../UI/PrimaryButton';
import TextField from '../UI/PrimaryTextField';
import {Container, Hint, Terms} from './styles/SignUp';
import {ISignUpForm, IUser} from './types';
import {Columns} from '../UI/Grid';

interface ISignUp {
  signUp: (data: IUser) => void;
  isLoad: boolean;
}

export default function SignUp({signUp, isLoad}: ISignUp): JSX.Element {
  const methods = useForm<ISignUpForm>();
  const {handleSubmit, control, errors} = methods;

  const onSubmit = (data: ISignUpForm) => {
    const user: IUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      _id: null,
      imageUrl: null,
    };
    signUp(user);
  };

  return (
    <Container>
      <Card>
        <CardTitle>Sign Up</CardTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Columns columns={2}>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: 'First Name is Required',
                  minLength: {
                    value: 2,
                    message: 'First Name should be at least 2 characters',
                  },
                }}
                defaultValue={null}
                render={(controllerProps) => {
                  return (
                    <TextField
                      variant="filled"
                      label="First Name"
                      name="firstName"
                      onChange={(event) =>
                        controllerProps.onChange(event.target.value)
                      }
                      errorMessage={
                        errors.firstName && errors.firstName.message
                      }
                    />
                  );
                }}
              />
              <Controller
                name="lastName"
                control={control}
                defaultValue={null}
                render={(controllerProps) => {
                  return (
                    <TextField
                      variant="filled"
                      label="Last Name"
                      name="lastName"
                      onChange={(event) =>
                        controllerProps.onChange(event.target.value)
                      }
                      errorMessage={errors.lastName && errors.lastName.message}
                    />
                  );
                }}
              />
            </Columns>
          </FormRow>
          <FormRow>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              defaultValue={null}
              render={(controllerProps) => {
                return (
                  <TextField
                    variant="filled"
                    label="Email"
                    name="email"
                    type="text"
                    onChange={(event) =>
                      controllerProps.onChange(event.target.value)
                    }
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
              rules={{
                required: 'Password is Required',
                minLength: {
                  value: 6,
                  message: 'Password should be at least 6 characters',
                },
              }}
              defaultValue={null}
              render={(controllerProps) => {
                return (
                  <TextField
                    variant="filled"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={(event) =>
                      controllerProps.onChange(event.target.value)
                    }
                    errorMessage={errors.password && errors.password.message}
                  />
                );
              }}
            />
          </FormRow>
          <PrimaryButton
            color="primary"
            variant="contained"
            type="submit"
            isLoad={isLoad}
          >
            Sign Up
          </PrimaryButton>
        </Form>
        <Terms>
          By clicking “Sign Up”, you agree to our terms of use and privacy
          statement. We’ll occasionally send you account related emails.
        </Terms>
      </Card>
      <Hint>
        <Card>
          <CardRow>
            <p>I already have an account</p>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </CardRow>
        </Card>
      </Hint>
    </Container>
  );
}
