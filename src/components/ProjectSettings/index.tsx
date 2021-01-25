import React from 'react';
import {useHistory} from 'react-router-dom';
import {IProject} from '../Projects/types';
import {Card, CardRow} from '../UI/Card';
import {Columns} from '../UI/Grid';
import PrimaryButton from '../UI/PrimaryButton';
import {ProjectSettingsContainer} from './styles/ProjectSettings';

export default function ProjectSettings(props: any) {
  const history = useHistory();
  const onEditClick = () => {
    console.log('onEdit');
  };

  const onDeleteClick = () => {
    console.log('onDelete');
    history.push('/projects');
  };

  return (
    <ProjectSettingsContainer>
      <Columns columns={2}>
        <div className="col1">
          <p className="title">Project information</p>
          <Card className="mb-24">
            <CardRow mb={16}>
              <div>
                <p className="label">Project name</p>
                <p>Project name</p>
              </div>
            </CardRow>
            <CardRow mb={16}>
              <div>
                <p className="label">Description</p>
                <p>Project description</p>
              </div>
            </CardRow>
            <CardRow mb={16}>
              <div>
                <p className="label">Color</p>
                <div className="color-item" />
              </div>
            </CardRow>
            <CardRow>
              <p>Edit project information</p>
              <PrimaryButton
                isLoad={false}
                color="primary"
                variant="contained"
                type="button"
                onClick={onEditClick}
              >
                Edit
              </PrimaryButton>
            </CardRow>
          </Card>
          <p className="title">Delete project</p>
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
    </ProjectSettingsContainer>
  );
}
