import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ForgotPassword, SignIn, SignUp} from '../../components';
import {IForgotPasswordForm} from '../../components/ForgotPassword/types';
import {ISignInForm} from '../../components/SignIn/types';
import {IUser} from '../../components/SignUp/types';
import Alert from '../../components/UI/Alert';
import * as ROUTES from '../../constants/routes';
import {signIn, signUp} from '../../redux/actions/authActions';
import {Container, Content, Logo} from './styles/AuthLayout';

interface IConnectedProps {
  error: string;
  isLoad: boolean;
}

type IAuthContainer = IConnectedProps & ReturnType<typeof mapDispatchToProps>;

function AuthContainer({
  error,
  isLoad,
  signIn,
  signUp,
  forgotPassword,
}: IAuthContainer) {
  return (
    <Container>
      <Content>
        <Logo>
          <img src="http://placehold.it/64x64" alt="logo" />
          Timekeeper
        </Logo>
        <Switch>
          <Route
            path={ROUTES.SIGN_IN}
            component={() => <SignIn signIn={signIn} isLoad={isLoad} />}
          />
          <Route
            path={ROUTES.SIGN_UP}
            component={() => <SignUp signUp={signUp} isLoad={isLoad} />}
          />
          <Route
            path={ROUTES.FORGOT_PASSWORD}
            component={() => (
              <ForgotPassword forgotPassword={forgotPassword} isLoad={isLoad} />
            )}
          />
          <Redirect to={ROUTES.SIGN_IN} />
        </Switch>
      </Content>
      {error ? <Alert message={error} type="error" /> : null}
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  error: state.auth.error,
  isLoad: state.auth.isLoad,
});

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (data: ISignInForm) => {
    return dispatch(signIn(data));
  },
  signUp: (data: IUser) => {
    return dispatch(signUp(data));
  },
  forgotPassword: (data: IForgotPasswordForm) => {
    // return dispatch(forgotPassword(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
