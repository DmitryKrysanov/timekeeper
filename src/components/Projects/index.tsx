import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {getProjects} from '../../redux/actions/projectActions';
import Loader from '../UI/Loader';
import {Container, Owner, ProjectCard, ProjectList} from './styles/Projects';
import {IProject} from './types';

interface IProjects {
  projects: IProject[];
  isProjectLoad: boolean;
}

export default function Projects({projects, isProjectLoad}: IProjects) {
  return (
    <Container>
      {isProjectLoad ? (
        <Loader color="primary" />
      ) : (
        <ProjectList>
          {projects.map((project) => (
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
