import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  Aside,
  Header,
  Project,
  Projects,
  Settings,
  Statistics,
} from '../../components';
import * as ROUTES from '../../constants/routes';

export default function MainLayout() {
  return (
    <div>
      Main
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
