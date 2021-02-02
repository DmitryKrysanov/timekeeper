import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import {createTask} from '../../../redux/actions/taskActions';
import {getFullTime} from '../../../utils/timeConvert';
import {CircleBtn} from '../../UI/Button';
import PrimaryTextField from '../../UI/PrimaryTextField';

import {NewTaskContainer} from './styles/NewTask';

interface INewTask {
  projectId: string;
}

export default function NewTask({projectId}: INewTask) {
  const dispatch = useDispatch();
  const [isStart, setIsStart] = useState(false);
  const [taskName, setTaskName] = useState<string>('');
  const [start, setStart] = useState<number>(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isStart) {
      let value = 0;
      interval = setInterval(() => {
        value++;
        setCounter(value);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStart]);

  const onInputChange = (event: any) => {
    setTaskName(event.currentTarget.value);
  };

  const onStartClick = () => {
    setIsStart(!isStart);
    setStart(Date.now());
  };

  const onStopClick = () => {
    setIsStart(!isStart);

    const end = Date.now();
    const duration = end - start;

    const newTask = {
      taskName,
      totalDuration: duration,
      periods: [
        {
          start,
          end,
          duration,
        },
      ],
      projectId,
    };
    dispatch(createTask(newTask));
    setCounter(0);
    setTaskName('');
  };

  return (
    <NewTaskContainer>
      <PrimaryTextField
        variant="filled"
        label="Task name"
        name="taskName"
        value={taskName}
        onChange={onInputChange}
      />
      <p className="timer">{getFullTime(counter * 1000)}</p>
      {isStart ? (
        <CircleBtn color="stop" onClick={onStopClick}>
          <StopIcon />
        </CircleBtn>
      ) : (
        <CircleBtn
          color="start"
          onClick={onStartClick}
          disabled={taskName.trim() ? false : true}
        >
          <PlayArrowIcon />
        </CircleBtn>
      )}
    </NewTaskContainer>
  );
}
