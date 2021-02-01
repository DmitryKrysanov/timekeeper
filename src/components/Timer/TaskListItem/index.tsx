import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/macro';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {deleteTask, editTask} from '../../../redux/actions/taskActions';
import {getFullTime, getShortTime} from '../../../utils/timeConvert';
import {IPeriod} from '../../Projects/types';
import {IconBtn} from '../../UI/Button';

export default function TaskListItem({task}: any) {
  const {taskName, totalDuration, periods, _id} = task;
  const [isOpen, setIsOpen] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isOptions, setIsOptions] = useState(false);
  const [counter, setCounter] = useState(getFullTime(totalDuration));
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isStart) {
      let value = 0;
      interval = setInterval(() => {
        value++;
        setCounter(getFullTime(totalDuration + value * 1000));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStart]);

  const onStartClick = () => {
    setIsStart(!isStart);
    setStart(Date.now());
  };

  const onStopClick = () => {
    setIsStart(!isStart);
    const end = Date.now();
    const duration = end - start;
    const totalDuration = task.totalDuration + duration;

    const newPeriod: IPeriod = {
      start,
      end,
      duration,
    };

    const updatedTask = {
      ...task,
      totalDuration,
      periods: [...task.periods, newPeriod],
    };
    dispatch(editTask(updatedTask));
  };

  const onOptionsClick = () => {
    setIsOptions(!isOptions);
    dispatch(deleteTask(_id));
  };

  return (
    <TaskContainer isOpen={isOpen}>
      <div className="task__title">
        <div className="title" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <h6>{taskName}</h6>
          <h6>{counter}</h6>
        </div>
        <div className="actions">
          {isStart ? (
            <IconBtn onClick={onStopClick}>
              <PauseCircleFilledIcon color="secondary" />
            </IconBtn>
          ) : (
            <IconBtn onClick={onStartClick}>
              <PlayCircleFilledIcon color="primary" />
            </IconBtn>
          )}
          <IconBtn onClick={onOptionsClick}>
            <MoreVertIcon />
          </IconBtn>
        </div>
      </div>
      <ul className="task__periods">
        {periods.map((period: IPeriod) => (
          <li className="period" key={period.start}>
            <p>{`${getShortTime(period.start)} - ${getShortTime(
              period.end,
            )}`}</p>
            <p>{getFullTime(period.duration)}</p>
          </li>
        ))}
      </ul>
    </TaskContainer>
  );
}

const TaskContainer = styled.div<{isOpen: boolean}>`
  padding: 0 0 0 16px;

  .task__title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      width: 100%;

      display: grid;
      grid-template-columns: 24px 11fr 1fr;
      column-gap: 24px;
      align-items: center;

      cursor: pointer;
    }

    .actions {
      display: flex;
      align-items: center;
    }
  }

  .task__periods {
    height: ${({isOpen}) => (isOpen ? 'auto' : 0)};

    display: flex;
    flex-direction: column;

    overflow: hidden;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #e0e0e0;

    .period {
      padding: 0 24px 0 48px;
      width: 100%;
      height: 48px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 0.875rem;
      }
    }
  }
`;
