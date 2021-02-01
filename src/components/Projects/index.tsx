import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {getProjects} from '../../redux/actions/projectActions';
import Header from '../Header';
import Loader from '../UI/Loader';
import {Container, Owner, ProjectCard, ProjectList} from './styles/Projects';
import {IProject} from './types';

export default function Projects() {
  const dispatch = useDispatch();
  const {projectsIsUpdated, isProjectLoad, projects} = useSelector(
    (state: any) => state.project,
  );

  useEffect(() => {
    dispatch(getProjects());
  }, [projectsIsUpdated]);

  return (
    <Container>
      <Header
        title="Projects"
        taskSearch={false}
        projectSearch={true}
        createProject={true}
      />
      {isProjectLoad ? (
        <Loader color="primary" />
      ) : (
        <ProjectList>
          {projects.map((project: IProject) => (
            <Link to={`${ROUTES.PROJECT}/${project._id}`} key={project._id}>
              <ProjectCard color={project.color}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <Owner />
              </ProjectCard>
            </Link>
          ))}
        </ProjectList>
      )}
    </Container>
  );
}
