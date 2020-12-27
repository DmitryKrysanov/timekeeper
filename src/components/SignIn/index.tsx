import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function SignIn() {
  return (
    <div>
      SignIn
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
    </div>
  );
}
