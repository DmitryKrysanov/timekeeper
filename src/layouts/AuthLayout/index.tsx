import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ForgotPassword, SignIn, SignUp} from '../../components';
import * as ROUTES from '../../constants/routes';

export default function AuthLayout() {
  return (
    <div>
      Auth
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
        <Redirect to={ROUTES.SIGN_IN} />
      </Switch>
    </div>
  );
}
