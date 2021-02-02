import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {
  Aside,
  Header,
  Project,
  Projects,
  Settings,
  Statistics,
} from '../../components';
import CreateProject from '../../components/CreateProject';
import MobileMenu from '../../components/MobileMenu';
import Alert from '../../components/UI/Alert';
import * as ROUTES from '../../constants/routes';

export default function MainLayout() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isCreateProject, setIsCreateProject] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('');

  const {isProjectLoad, error, activeProject} = useSelector(
    (state: any) => state.project,
  );

  const openAsideHandler = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const openCreateProjectHandler = () => {
    setIsCreateProject(!isCreateProject);
  };

  return (
    <>
      <CreateProject
        isCreateProject={isCreateProject}
        openCreateProjectHandler={openCreateProjectHandler}
        isProjectLoad={isProjectLoad}
      />
      <Container>
        <Aside activeProject={activeProject} setHeaderTitle={setHeaderTitle} />
        <Content>
          <Switch>
            <Route path={`${ROUTES.PROJECTS}/:id`} component={Project} />
            <Route path={ROUTES.PROJECTS} component={Projects} />
            <Route path={ROUTES.STATISTICS} component={Statistics} />
            <Route path={ROUTES.SETTINGS} component={Settings} />
            <Redirect to={ROUTES.PROJECTS} />
          </Switch>
        </Content>
      </Container>
      {error ? <Alert message={error} type="error" /> : null}
    </>
  );
}

// STYLES
const Container = styled.div`
  display: grid;
  grid-template-areas:
    'aside header'
    'aside content';
  grid-template-columns: 202px 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 0 1fr;
  }
`;

const Content = styled.div`
  grid-area: content;
`;
