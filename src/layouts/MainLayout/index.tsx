import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
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
import {IProject} from '../../components/Projects/types';
import Alert from '../../components/UI/Alert';
import * as ROUTES from '../../constants/routes';
import {getProjects} from '../../redux/actions/projectActions';
import {Container, Content} from './styles/MainLayout';

interface IConnectedProps {
  projects: IProject[];
  isProjectLoad: boolean;
  error: string;
  projectsIsUpdated: boolean;
  activeProject: IProject | null;
}

type ProjectProps = IConnectedProps & ReturnType<typeof mapDispatchToProps>;

function MainLayout({
  projects,
  isProjectLoad,
  error,
  getProjects,
  projectsIsUpdated,
  activeProject,
}: ProjectProps) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isCreateProject, setIsCreateProject] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('');

  useEffect(() => {
    getProjects();
  }, [projectsIsUpdated]);

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
        <Header
          title={headerTitle}
          openAsideHandler={openAsideHandler}
          openCreateProjectHandler={openCreateProjectHandler}
        />
        <Aside activeProject={activeProject} setHeaderTitle={setHeaderTitle} />
        <Content>
          <Switch>
            <Route path={`${ROUTES.PROJECTS}/:id`} component={Project} />
            <Route
              path={ROUTES.PROJECTS}
              component={() => (
                <Projects projects={projects} isProjectLoad={isProjectLoad} />
              )}
            />
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

const mapStateToProps = (state: any) => ({
  projects: state.project.projects,
  isProjectLoad: state.project.isProjectLoad,
  error: state.project.error,
  projectsIsUpdated: state.project.projectsIsUpdated,
  activeProject: state.project.activeProject,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProjects: () => {
    return dispatch(getProjects());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
