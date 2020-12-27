import React from 'react';
import {Switch, Route, Redirect, useParams, Link} from 'react-router-dom';
import {Timer, ProjectStatistics, ProjectSettings} from '..';
import * as ROUTES from '../../constants/routes';

export default function Project() {
  const {id}: any = useParams();
  return (
    <>
      Project
      <Link to={`${ROUTES.PROJECT}/${id}/timer`}>Timer</Link>
      <Link to={`${ROUTES.PROJECT}/${id}/project-statistics`}>
        Project Statistics
      </Link>
      <Link to={`${ROUTES.PROJECT}/${id}/project-settings`}>
        Project Settings
      </Link>
      <Switch>
        <Route path={`${ROUTES.PROJECT}/${id}/timer`} component={Timer} />
        <Route
          path={`${ROUTES.PROJECT}/${id}/project-statistics`}
          component={ProjectStatistics}
        />
        <Route
          path={`${ROUTES.PROJECT}/${id}/project-settings`}
          component={ProjectSettings}
        />
        <Redirect to={`${ROUTES.PROJECT}/${id}/timer`} />
      </Switch>
    </>
  );
}
