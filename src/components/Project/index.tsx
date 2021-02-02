import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch, Route, Redirect, useParams} from 'react-router-dom';
import styled from 'styled-components/macro';
import {Timer, ProjectStatistics, ProjectSettings} from '..';
import * as ROUTES from '../../constants/routes';
import {
  getProjectById,
  getProjectByIdSuccess,
} from '../../redux/actions/projectActions';
import Loader from '../UI/Loader';

export default function Project() {
  const dispatch = useDispatch();
  const {id}: any = useParams();
  const activeProject = useSelector(
    (state: any) => state.project.activeProject,
  );

  useEffect(() => {
    dispatch(getProjectById(id));
    return () => {
      dispatch(getProjectByIdSuccess(null));
    };
  }, []);

  return (
    <ProjectContainer>
      {!activeProject ? (
        <ProjectLoader color="primary" />
      ) : (
        <Switch>
          <Route
            path={`${ROUTES.PROJECTS}/${id}/timer`}
            component={Timer}
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
      )}
    </ProjectContainer>
  );
}

// STYLES

const ProjectContainer = styled.div`
  position: relative;
  height: 100%;
`;

const ProjectLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
