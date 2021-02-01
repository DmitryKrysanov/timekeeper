import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/macro';
import {getTasks} from '../../redux/actions/taskActions';
import Header from '../Header';
import DayLoad from './DayLoad';
import NewTask from './NewTask';
import TaskList from './TaskList';

export default function Timer() {
  const {_id} = useSelector((state: any) => state.project.activeProject);

  const dispatch = useDispatch();
  const {tasks, isTasksLoad, tasksIsUpdated} = useSelector(
    (state: any) => state.task,
  );

  useEffect(() => {
    dispatch(getTasks(_id));
  }, [tasksIsUpdated]); // request sends twice

  return (
    <TimerContainer>
      <Header
        title="Timer"
        taskSearch={true}
        projectSearch={false}
        createProject={false}
      />
      <NewTask projectId={_id} />
      <DayLoad tasks={tasks} />
      <TaskList tasks={tasks} isTasksLoad={isTasksLoad} />
    </TimerContainer>
  );
}

const TimerContainer = styled.div`
  padding: 0 24px;
`;
