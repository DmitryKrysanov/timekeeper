import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Switch} from 'react-router-dom';
import {AuthContainer, MainLayout} from './layouts';
import * as ROUTES from './constants/routes';
import {ProtectedRoute} from './helpers/routes';

export default function App(): JSX.Element {
  const uid = useSelector((state: any) => state.auth.uid);

  return (
    <Switch>
      <ProtectedRoute
        path="/main/:page"
        redirect={ROUTES.SIGN_IN}
        isAuth={Boolean(uid)}
      >
        <MainLayout />
      </ProtectedRoute>
      <ProtectedRoute path="/auth/:method" redirect="/main" isAuth={!uid}>
        <AuthContainer />
      </ProtectedRoute>
      <Redirect to={ROUTES.PROJECTS} />
    </Switch>
  );
}
