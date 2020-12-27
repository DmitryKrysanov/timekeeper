import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function SignUp() {
  return (
    <div>
      SignUp
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
  );
}
