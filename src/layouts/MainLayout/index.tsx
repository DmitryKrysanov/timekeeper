import React from 'react';
import {useDispatch} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  Aside,
  Header,
  Project,
  Projects,
  Settings,
  Statistics,
} from '../../components';
import PrimaryButton from '../../components/UI/PrimaryButton';
import * as ROUTES from '../../constants/routes';
import {signOut} from '../../redux/actions/authActions';

export default function MainLayout() {
  const dispatch = useDispatch();
  const onSignOutClick = () => {
    dispatch(signOut());
  };
  return (
    <div>
      Main
      <PrimaryButton
        isLoad={false}
        color="primary"
        variant="contained"
        onClick={onSignOutClick}
        type="button"
      >
        Sign Out
      </PrimaryButton>
      <Aside />
      <Header />
      <Switch>
        <Route path={ROUTES.PROJECTS} component={Projects} />
        <Route path={ROUTES.STATISTICS} component={Statistics} />
        <Route path={ROUTES.SETTINGS} component={Settings} />
        <Route path={`${ROUTES.PROJECT}/:id`} component={Project} />
        <Redirect to={ROUTES.PROJECTS} />
      </Switch>
    </div>
  );
}
