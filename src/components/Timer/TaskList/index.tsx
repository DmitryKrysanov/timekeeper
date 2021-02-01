import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {ITask} from '../../Projects/types';
import {getDate} from '../../../utils/timeConvert';
import TaskListItem from '../TaskListItem';

interface ITaskList {
  tasks: ITask[];
  isTasksLoad: boolean;
}

export default function TaskList({tasks}: ITaskList) {
  const [list, setList] = useState<any>([]);

  const listDateFilter = () => {
    const reversed = tasks.reverse();
    const groups = reversed.reduce<any>((groups, task) => {
      const date: string = getDate(task.periods[task.periods.length - 1].end);
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(task);
      return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        tasks: groups[date],
      };
    });

    return groupArrays;
  };

  useEffect(() => {
    setList(listDateFilter());
  }, [tasks]);

  return (
    <TaskListContainer>
      {list.map((item: any) => (
        <Fragment key={item.date}>
          <p className="date-title">{item.date}</p>
          <div className="date-tasks">
            {item.tasks.map((task: ITask) => (
              <TaskListItem task={task} key={task._id} />
            ))}
          </div>
        </Fragment>
      ))}
    </TaskListContainer>
  );
}

// STYLES

const TaskListContainer = styled.div`
  .date-title {
    font-size: 0.875rem;
    color: #666666;

    margin-bottom: 8px;
  }

  .date-tasks {
    margin-bottom: 24px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }
`;
