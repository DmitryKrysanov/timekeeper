import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, useParams} from 'react-router-dom';
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

const menu: IMenuListItem[] = [
  {
    label: 'Projects',
    path: '/main/projects',
    iconPath:
      'M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3ZM5 9V5H9V9H5ZM19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3ZM15 9V5H19V9H15ZM5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15C3 13.8954 3.89543 13 5 13ZM5 15V19H9V15H5ZM19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13ZM15 19V15H19V19H15Z',
  },
  {
    label: 'Statistics',
    path: '/main/statistics',
    iconPath:
      'M12 4C11.4477 4 11 4.44772 11 5V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V5C13 4.44772 12.5523 4 12 4ZM19 12C18.4477 12 18 12.4477 18 13V20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12ZM4 9C4 8.44772 4.44772 8 5 8C5.55228 8 6 8.44772 6 9V20C6 20.5523 5.55228 21 5 21C4.44772 21 4 20.5523 4 20V9Z',
  },
  {
    label: 'Settings',
    path: '/main/settings',
    iconPath:
      'M7.25991 21.54C7.64812 21.8357 8.12193 21.9971 8.60991 22C8.7396 22.0127 8.87022 22.0127 8.99991 22C9.61233 21.8975 10.1552 21.5465 10.4999 21.03L10.7299 20.7C11.0571 20.2307 11.588 19.9448 12.1599 19.93C12.7607 19.9152 13.327 20.2097 13.6599 20.71L13.7799 20.88C14.1245 21.3929 14.6657 21.7406 15.2754 21.8409C15.885 21.9413 16.5091 21.7854 16.9999 21.41L19.0099 19.86C20.0064 19.0861 20.2258 17.669 19.5099 16.63L19.2499 16.25C18.9301 15.7627 18.8388 15.1602 18.9999 14.6C19.1716 13.9954 19.6326 13.5156 20.2299 13.32L20.4299 13.25C21.6249 12.8245 22.2698 11.5303 21.8899 10.32L21.0999 7.8C20.9276 7.21154 20.5235 6.71837 19.9804 6.43364C19.4374 6.14891 18.8019 6.09706 18.2199 6.29L17.8799 6.4C17.3393 6.5787 16.7454 6.4816 16.2899 6.14L16.1799 6.06C15.7357 5.72005 15.4796 5.18923 15.4899 4.63V4.35C15.4948 3.72202 15.2502 3.11779 14.8099 2.67C14.3869 2.24273 13.8111 2.00162 13.2099 2H10.6599C9.38643 2.01646 8.36431 3.05643 8.36991 4.33V4.57C8.36796 5.15795 8.09948 5.71329 7.63991 6.08L7.50991 6.18C7.001 6.56499 6.3347 6.67354 5.72991 6.47C5.17705 6.27868 4.56996 6.32204 4.04991 6.59C3.49084 6.87665 3.08262 7.39057 2.92991 8L2.10991 10.6C1.71415 11.82 2.37422 13.1312 3.58991 13.54H3.74991C4.29642 13.7448 4.71248 14.198 4.86991 14.76L4.92991 14.92C5.15604 15.541 5.0705 16.2328 4.69991 16.78C3.98301 17.8133 4.19808 19.2267 5.18991 20L7.25991 21.54ZM6.77991 14.12C6.42834 12.9561 5.54507 12.0283 4.39991 11.62L4.21991 11.57C4.03714 11.504 3.93976 11.3048 3.99991 11.12L4.82991 8.51C4.85097 8.44741 4.89347 8.39429 4.94991 8.36C4.99533 8.34476 5.04449 8.34476 5.08991 8.36C6.32265 8.78017 7.68368 8.55895 8.71991 7.77L8.84991 7.67C9.8085 6.93157 10.37 5.79003 10.3699 4.58V4.33C10.3644 4.24774 10.3919 4.16669 10.4464 4.10476C10.5008 4.04284 10.5776 4.00514 10.6599 4H13.1999C13.2774 3.99946 13.3524 4.02801 13.4099 4.08C13.4758 4.15033 13.5117 4.24362 13.5099 4.34V4.65C13.5091 5.82822 14.0606 6.93868 14.9999 7.65L15.0399 7.74C16.0201 8.48223 17.3024 8.69533 18.4699 8.31L18.8099 8.2C18.8696 8.16971 18.9402 8.16971 18.9999 8.2C19.0898 8.23328 19.1621 8.30196 19.1999 8.39L19.9799 10.88C20.0483 11.054 19.9634 11.2505 19.7899 11.32L19.5899 11.39C18.3851 11.8038 17.4565 12.7771 17.0999 14C16.7487 15.1614 16.9437 16.4194 17.6299 17.42L17.8899 17.8C18.0004 17.956 17.9696 18.1712 17.8199 18.29L15.7599 19.85C15.7061 19.8919 15.6374 19.91 15.5699 19.9C15.4971 19.8838 15.4329 19.841 15.3899 19.78L15.2699 19.6C14.5658 18.5826 13.4072 17.9754 12.1699 17.9754C10.9326 17.9754 9.77404 18.5826 9.06991 19.6L8.83991 19.93C8.80336 19.9922 8.74171 20.0356 8.67081 20.049C8.5999 20.0625 8.52666 20.0446 8.46991 20L6.31991 18.37C6.18889 18.2252 6.18889 18.0048 6.31991 17.86C7.04678 16.7976 7.21798 15.4504 6.77991 14.24V14.12ZM8.76652 13.3394C9.30826 14.6472 10.5845 15.5 12.0001 15.5C13.9331 15.5 15.5001 13.933 15.5001 12C15.5001 10.5844 14.6474 9.30814 13.3395 8.7664C12.0316 8.22467 10.5262 8.52411 9.52523 9.52511C8.52424 10.5261 8.22479 12.0315 8.76652 13.3394ZM10.5001 12C10.5001 11.1716 11.1717 10.5 12.0001 10.5C12.8285 10.5 13.5001 11.1716 13.5001 12C13.5001 12.8284 12.8285 13.5 12.0001 13.5C11.1717 13.5 10.5001 12.8284 10.5001 12Z',
  },
];

export interface IMenuListItem {
  label: string;
  path: string;
  iconPath: string;
}

interface IConnectedProps {
  projects: IProject[];
  isProjectLoad: boolean;
  error: string;
  projectsIsUpdated: boolean;
}

type ProjectProps = IConnectedProps & ReturnType<typeof mapDispatchToProps>;

function MainLayout({
  projects,
  isProjectLoad,
  error,
  getProjects,
  projectsIsUpdated,
}: ProjectProps) {
  const {page}: any = useParams();
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isCreateProject, setIsCreateProject] = useState(false);

  useEffect(() => {
    getProjects();
  }, [projectsIsUpdated]);

  const openAsideHandler = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const openCreateProjectHandler = () => {
    setIsCreateProject(!isCreateProject);
  };

  const containerWidth = window.innerWidth;

  return (
    <>
      <CreateProject
        isCreateProject={isCreateProject}
        openCreateProjectHandler={openCreateProjectHandler}
        isProjectLoad={isProjectLoad}
      />
      {/* <MobileMenu
        activePage={page}
        menu={menu}
        header="logo"
        isOpen={isAsideOpen}
      /> */}
      <Container>
        <Header
          title={page}
          openAsideHandler={openAsideHandler}
          openCreateProjectHandler={openCreateProjectHandler}
        />
        <Aside activePage={page} menu={menu} header="logo" />
        <Content>
          <Switch>
            <Route
              path={ROUTES.PROJECTS}
              component={() => (
                <Projects projects={projects} isProjectLoad={isProjectLoad} />
              )}
            />
            <Route path={ROUTES.STATISTICS} component={Statistics} />
            <Route path={ROUTES.SETTINGS} component={Settings} />
            <Route path={`${ROUTES.PROJECT}/:id`} component={Project} />
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
});

const mapDispatchToProps = (dispatch: any) => ({
  getProjects: () => {
    return dispatch(getProjects());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
