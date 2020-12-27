import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  Aside,
  Header,
  ProjectSettings,
  ProjectStatistics,
  Timer,
} from '../../components';

export default function ProjectLayout() {
  return (
    <div>
      Project
      <Aside />
      <Header />
      <div>
        <Switch>
          <Route path="/project/id/timer" component={Timer} />
          <Route
            path="/project/id/project-statistics"
            component={ProjectStatistics}
          />
          <Route
            path="/project/id/project-settings"
            component={ProjectSettings}
          />
        </Switch>
      </div>
    </div>
  );
}
