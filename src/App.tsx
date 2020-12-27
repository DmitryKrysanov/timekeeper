import React from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {AuthLayout, MainLayout} from './layouts';
import * as ROUTES from './constants/routes';
import {ProtectedRoute} from './helpers/routes';

export default function App(): JSX.Element {
  const user = false;

  return (
    <Switch>
      <ProtectedRoute
        path="/main/:page"
        redirect={ROUTES.SIGN_IN}
        isAuth={user}
      >
        <MainLayout />
      </ProtectedRoute>
      <ProtectedRoute path="/auth/:method" redirect="/main" isAuth={!user}>
        <AuthLayout />
      </ProtectedRoute>
      <Redirect to={ROUTES.PROJECTS} />
    </Switch>
  );
}
