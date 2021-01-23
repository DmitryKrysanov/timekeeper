import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch, Route, Redirect, useParams, Link} from 'react-router-dom';
import {Timer, ProjectStatistics, ProjectSettings} from '..';
import * as ROUTES from '../../constants/routes';
import {
  getProjectById,
  getProjectByIdSuccess,
} from '../../redux/actions/projectActions';

export default function Project() {
  const dispatch = useDispatch();
  const {id}: any = useParams();

  useEffect(() => {
    dispatch(getProjectById(id));
    return () => {
      dispatch(getProjectByIdSuccess(null));
    };
  }, []);

  const activeProject = useSelector(
    (state: any) => state.project.activeProject,
  );

  return (
    <>
      <Switch>
        <Route
          path={`${ROUTES.PROJECTS}/${id}/timer`}
          component={() => <Timer project={activeProject} />}
          exact
        />
        <Route
          path={`${ROUTES.PROJECTS}/${id}/project-activity`}
          component={ProjectStatistics}
          exact
        />
        <Route
          path={`${ROUTES.PROJECTS}/${id}/project-settings`}
          component={ProjectSettings}
          exact
        />
        <Redirect to={`${ROUTES.PROJECT}/${id}/timer`} />
      </Switch>
    </>
  );
}
