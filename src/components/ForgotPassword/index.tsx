import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function ForgotPassword() {
  return (
    <div>
      ForgotPassword
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </div>
  );
}
