import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components/macro';
import {deleteProject} from '../../redux/actions/projectActions';
import Header from '../Header';
import ProjectDialog from '../ProjectDialog';
import {IProject} from '../Projects/types';
import {Card, CardRow} from '../UI/Card';
import {Columns} from '../UI/Grid';
import Loader from '../UI/Loader';
import PrimaryButton from '../UI/PrimaryButton';

export default function ProjectSettings() {
  const [isEditProject, setIsEditProject] = useState(false);
  const activeProject = useSelector(
    (state: any) => state.project.activeProject,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const openEditHandler = () => {
    setIsEditProject(!isEditProject);
  };

  const onDeleteClick = () => {
    dispatch(deleteProject(activeProject._id));
    history.push('/projects');
  };

  const empty = () => {};

  return (
    <ProjectSettingsContainer>
      <Header
        title="Project Settings"
        search={false}
        createProject={false}
        setSearch={empty}
      />
      <ProjectDialog
        open={isEditProject}
        openHandler={openEditHandler}
        type="edit"
        project={activeProject}
      />
      {activeProject ? (
        <Columns columns={2}>
          <div className="col1">
            <p className="subtitle">Project information</p>
            <Card className="mb-24">
              <CardRow mb={16}>
                <div>
                  <p className="label">Project name</p>
                  <p>{activeProject.name}</p>
                </div>
              </CardRow>
              <CardRow mb={16}>
                <div>
                  <p className="label">Description</p>
                  <p>
                    {activeProject.description
                      ? activeProject.description
                      : 'no description'}
                  </p>
                </div>
              </CardRow>
              <CardRow mb={16}>
                <div>
                  <p className="label">Color</p>
                  <ColorItem color={activeProject.color} />
                </div>
              </CardRow>
              <CardRow>
                <p>Edit project information</p>
                <PrimaryButton
                  isLoad={false}
                  color="primary"
                  variant="contained"
                  type="button"
                  onClick={openEditHandler}
                >
                  Edit
                </PrimaryButton>
              </CardRow>
            </Card>
            <p className="subtitle">Delete project</p>
            <Card>
              <CardRow>
                <p>Delete the project</p>
                <PrimaryButton
                  isLoad={false}
                  color="secondary"
                  variant="text"
                  type="button"
                  onClick={onDeleteClick}
                >
                  Delete
                </PrimaryButton>
              </CardRow>
            </Card>
          </div>
        </Columns>
      ) : (
        <Loader color="primary" />
      )}
    </ProjectSettingsContainer>
  );
}

// STYLES

const ProjectSettingsContainer = styled.div`
  padding: 0 24px;

  .col1 {
    .mb-24 {
      margin-bottom: 24px;
    }

    .label {
      font-size: 0.75rem;
      color: #666;

      margin-bottom: 4px;
    }
  }

  .subtitle {
    font-size: 0.875rem;
    color: #666;

    margin-bottom: 8px;
  }
`;

const ColorItem = styled.div<{color: string}>`
  width: 24px;
  height: 24px;
  display: block;
  background-color: ${({color}) => color};
  border-radius: 4px;
`;
