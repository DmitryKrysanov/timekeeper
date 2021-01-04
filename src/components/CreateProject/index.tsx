import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {Form, FormRow} from '../UI/Form';
import TextField from '../UI/PrimaryTextField';
import PrimaryButton from '../UI/PrimaryButton';
import {ColorItem, ColorList} from './styles/CreateProject';
import {createProject} from '../../redux/actions/projectActions';
import Dialog from '../UI/Dialog';

interface ICreateProject {
  openCreateProjectHandler: () => void;
  isCreateProject: boolean;
  isProjectLoad: boolean;
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

export default function CreateProject({
  isCreateProject,
  openCreateProjectHandler,
  isProjectLoad,
}: ICreateProject) {
  const methods = useForm<any>();
  const {handleSubmit, control, errors} = methods;
  const dispatch = useDispatch();
  const [activeColor, setActiveColor] = useState('#B8BDBF');

  const handleClose = () => {
    openCreateProjectHandler();
  };

  const onSubmit = (data: any) => {
    const project = {
      ...data,
      color: activeColor,
    };
    dispatch(createProject(project));
  };

  return (
    <Dialog open={isCreateProject} onClose={handleClose}>
      <h2>Create Project</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Controller
            name="name"
            control={control}
            defaultValue={null}
            rules={{required: 'Project Name is Required'}}
            render={(controllerProps) => {
              return (
                <TextField
                  variant="filled"
                  label="Project Name"
                  name="name"
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
            defaultValue={null}
            render={(controllerProps) => {
              return (
                <TextField
                  variant="filled"
                  label="Description"
                  name="description"
                  type="text"
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
            isLoad={isProjectLoad}
          >
            Create
          </PrimaryButton>
        </FormRow>
      </Form>
    </Dialog>
  );
}
