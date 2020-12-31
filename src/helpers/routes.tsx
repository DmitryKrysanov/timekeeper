import React from 'react';
import {Route, Redirect} from 'react-router-dom';

interface Props {
  path: string;
  isAuth: boolean;
  redirect: string;
  children: any;
}

export function ProtectedRoute({path, isAuth, redirect, children}: Props) {
  return (
    <Route
      path={path}
      render={() =>
        isAuth ? children : <Redirect to={{pathname: redirect}} />
      }
    />
  );
}
