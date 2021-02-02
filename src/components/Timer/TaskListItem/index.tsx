import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/macro';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DoneIcon from '@material-ui/icons/Done';
import {deleteTask, editTask} from '../../../redux/actions/taskActions';
import {getFullTime, getShortTime} from '../../../utils/timeConvert';
import {IPeriod} from '../../Projects/types';
import {IconBtn} from '../../UI/Button';
import {Menu, MenuItem} from '../../UI/Menu';

export default function TaskListItem({task}: any) {
  const {taskName, totalDuration, periods, _id} = task;
  const [isOpen, setIsOpen] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [counter, setCounter] = useState(getFullTime(totalDuration));
  const [start, setStart] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState('');
  const dispatch = useDispatch();

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

  const onEditClick = () => {
    setIsEdit(!isEdit);
  };

  const onEdit = (event: any) => {
    event.preventDefault();
    const editedTask = {
      ...task,
      taskName: editedTaskName,
    };
    dispatch(editTask(editedTask));
    setIsEdit(!isEdit);
  };

  const onDeleteClick = () => {
    dispatch(deleteTask(_id)); // can be undefined
  };

  return (
    <TaskContainer isOpen={isOpen}>
      <div className="task__title">
        <div className="title" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          {isEdit ? (
            <form className="edit" onSubmit={onEdit}>
              <input
                type="text"
                defaultValue={taskName}
                onChange={(event) =>
                  setEditedTaskName(event.currentTarget.value)
                }
              />
              <IconBtn
                type="submit"
                disabled={editedTaskName.trim() ? false : true}
              >
                <DoneIcon color="primary" />
              </IconBtn>
            </form>
          ) : (
            <h6>{taskName}</h6>
          )}
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
          <Menu>
            <MenuItem onClick={onEditClick}>Edit</MenuItem>
            <MenuItem onClick={onDeleteClick}>Delete</MenuItem>
          </Menu>
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

// STYLES

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

      .edit {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
          border-style: none;
          border-bottom: 1px solid #e5e5e5;
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;

      position: relative;
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
