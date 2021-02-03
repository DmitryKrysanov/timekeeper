import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import styled from 'styled-components';
import {Form, FormRow} from '../UI/Form';
import TextField from '../UI/PrimaryTextField';
import PrimaryButton from '../UI/PrimaryButton';
import {createProject, editProject} from '../../redux/actions/projectActions';
import Dialog from '../UI/Dialog';
import {IProject} from '../Projects/types';
import Alert from '../UI/Alert';

interface IProjectDialog {
  open: boolean;
  openHandler: () => void;
  project?: IProject;
  type: 'create' | 'edit';
}

const colors = [
  '#B8BDBF',
  '#6F7ED7',
  '#77C4E7',
  '#00BF88',
  '#FF4035',
  '#FD8040',
  '#F5B200',
  '#F56D8E',
  '#955AD2',
];

export default function ProjectDialog({
  openHandler,
  project,
  open,
  type,
}: IProjectDialog) {
  const methods = useForm<any>();
  const {handleSubmit, control, errors} = methods;
  const {isLoad, error} = useSelector((state: any) => state.project);
  const dispatch = useDispatch();
  const [activeColor, setActiveColor] = useState('#B8BDBF');

  const handleClose = () => {
    openHandler();
  };

  useEffect(() => {
    if (project) {
      setActiveColor(project.color);
    }
  }, []);

  const onSubmit = async (data: any) => {
    if (type === 'create') {
      const newProject = {
        ...data,
        color: activeColor,
      };
      dispatch(createProject(newProject));
    } else {
      if (project) {
        const editedProject = {
          ...project,
          color: activeColor,
          name: data.name,
          description: data.description,
        };
        dispatch(editProject(editedProject));
        console.log(editedProject);
      }
    }
    openHandler();
  };

  return (
    <>
      {error ? <Alert message={error} type="error" /> : null}
      <Dialog open={open} onClose={handleClose}>
        <Title>{type === 'create' ? 'Create Project' : 'Edit Project'}</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Controller
              name="name"
              control={control}
              defaultValue={project ? project.name : null}
              rules={{required: 'Project Name is Required'}}
              render={(controllerProps) => {
                return (
                  <TextField
                    variant="filled"
                    label="Project Name"
                    name="name"
                    defaultValue={project ? project.name : ''}
                    onChange={(event) =>
                      controllerProps.onChange(event.target.value)
                    }
                    errorMessage={errors.name && errors.name.message}
                  />
                );
              }}
            />
          </FormRow>
          <FormRow>
            <Controller
              name="description"
              control={control}
              defaultValue={project ? project.description : null}
              render={(controllerProps) => {
                return (
                  <TextField
                    variant="filled"
                    label="Description"
                    name="description"
                    type="text"
                    defaultValue={project ? project.description : ''}
                    onChange={(event) =>
                      controllerProps.onChange(event.target.value)
                    }
                    errorMessage={
                      errors.description && errors.description.message
                    }
                  />
                );
              }}
            />
          </FormRow>
          <FormRow>
            <h4>Color</h4>
            <ColorList>
              {colors.map((color) => (
                <ColorItem
                  key={color}
                  color={color}
                  onClick={() => setActiveColor(color)}
                  active={activeColor === color ? true : false}
                />
              ))}
            </ColorList>
          </FormRow>
          <FormRow>
            <PrimaryButton
              color="primary"
              variant="text"
              type="button"
              isLoad={false}
              onClick={handleClose}
            >
              Cancel
            </PrimaryButton>
            <PrimaryButton
              color="primary"
              variant="contained"
              type="submit"
              isLoad={isLoad}
            >
              {type === 'create' ? 'Create' : 'Edit'}
            </PrimaryButton>
          </FormRow>
        </Form>
      </Dialog>
    </>
  );
}

// STYLES

const Title = styled.h2`
  margin-bottom: 16px;
`;

const ColorList = styled.ul`
  display: flex;
  align-items: center;
`;

const ColorItem = styled.li<{color: string; active: boolean}>`
  width: 24px;
  height: 24px;
  display: block;
  background-color: ${({color}) => (color ? color : '#fff')};
  border-radius: 4px;
  border: ${({active}) => (active ? '2px solid #212121' : '2px solid #fff')};

  margin-right: 8px;
`;
