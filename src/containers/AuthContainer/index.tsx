import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ForgotPassword, SignIn, SignUp} from '../../components';
import Alert from '../../components/UI/Alert';
import * as ROUTES from '../../constants/routes';
import {Container, Content, Logo} from './styles/AuthLayout';

export default function AuthContainer() {
  const alert = useSelector((state: any) => state.auth.error);
  return (
    <Container>
      <Content>
        <Logo>
          <img src="http://placehold.it/64x64" alt="logo" />
          Timekeeper
        </Logo>
        <Switch>
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
          <Redirect to={ROUTES.SIGN_IN} />
        </Switch>
      </Content>
      {alert ? <Alert message={alert} type="error" /> : null}
    </Container>
  );
}
