import React, {useState} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {CircleBtn, IconBtn} from '../UI/Button';
import PrimaryTextField from '../UI/PrimaryTextField';
import {
  TimerContainer,
  NewTask,
  DayProgress,
  TaskList,
  TaskContainer,
} from './styles/Timer';
import {timeConvert} from '../../utils/timeConvert';
import {IPeriod, ITask} from '../Projects/types';

const mockTasks: ITask[] = [
  {
    taskName: 'Task 1',
    taskId: '1',
    totalDuration: 10000,
    periods: [
      {start: '00:00 AM', end: '03:45 AM', duration: 1000, periodId: '1'},
      {start: '00:23 AM', end: '01:45 AM', duration: 2000, periodId: '2'},
    ],
  },
];

export default function Timer({project}: any) {
  const [isStart, setIsStart] = useState(false);
  const [taskName, setTaskName] = useState<string | null>(null);

  const onInputChange = (event: any) => {
    setTaskName(event.currentTarget.value);
  };

  const onStartClick = () => {
    setIsStart(!isStart);
    console.log(new Date());
  };

  const onStopClick = () => {
    setIsStart(!isStart);
    console.log(new Date());
  };

  return (
    <TimerContainer>
      <NewTask>
        <PrimaryTextField
          variant="filled"
          label="Task name"
          name="taskName"
          onChange={onInputChange}
        />
        <p className="timer">{timeConvert(0)}</p>
        {isStart ? (
          <CircleBtn color="stop" onClick={onStopClick}>
            <StopIcon />
          </CircleBtn>
        ) : (
          <CircleBtn color="start" onClick={onStartClick}>
            <PlayArrowIcon />
          </CircleBtn>
        )}
      </NewTask>
      <DayProgress percents={20}>
        <div className="track" />
        <p>5:25h</p>
      </DayProgress>
      <TaskList>
        <p>Today</p>
        {mockTasks.map((task: ITask) => (
          <Task task={task} key={task.taskId} />
        ))}
      </TaskList>
    </TimerContainer>
  );
}

const Task = ({task}: any) => {
  const {taskName, totalDuration, periods} = task;
  const [isOpen, setIsOpen] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isOptions, setIsOptions] = useState(false);

  const onStartClick = () => {
    setIsStart(!isStart);
  };

  const onOptionsClick = () => {
    setIsOptions(!isOptions);
  };

  return (
    <TaskContainer isOpen={isOpen}>
      <div className="task__title">
        <div className="title" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <h6>{taskName}</h6>
          <h6>{timeConvert(totalDuration)}</h6>
        </div>
        <div className="actions">
          <IconBtn onClick={onStartClick}>
            {isStart ? (
              <PauseCircleFilledIcon color="secondary" />
            ) : (
              <PlayCircleFilledIcon color="primary" />
            )}
          </IconBtn>
          <IconBtn onClick={onOptionsClick}>
            <MoreVertIcon />
          </IconBtn>
        </div>
      </div>
      <ul className="task__periods">
        {periods.map((period: IPeriod) => (
          <li className="period" key={period.periodId}>
            <p>{`${period.start} - ${period.end}`}</p>
            <p>{timeConvert(period.duration)}</p>
          </li>
        ))}
      </ul>
    </TaskContainer>
  );
};
