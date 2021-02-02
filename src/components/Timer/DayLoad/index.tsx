import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {getDate, getFullTime} from '../../../utils/timeConvert';
import {ITask} from '../../Projects/types';

interface IDayLoad {
  tasks: ITask[];
}

export default function DayLoad({tasks}: IDayLoad) {
  const [total, setTotal] = useState(0);
  const [percent, setPercent] = useState(0);

  const getDayTime = (array: any) => {
    const today = array.filter(
      (item: ITask) => getDate(item.periods[0].start) === getDate(Date.now()),
    );
    let dailyTotalTime = 0;
    for (let i = 0; i < today.length; i++) {
      dailyTotalTime += today[i].totalDuration;
    }
    return dailyTotalTime;
  };

  const toPercent = (currentDuration: any) => {
    const normalWorkDay = 8 * 3.6e6;
    return Math.floor((currentDuration * 100) / normalWorkDay);
  };

  useEffect(() => {
    setTotal(getDayTime(tasks));
    setPercent(toPercent(total));
  }, [tasks]);

  return (
    <DayLoadContainer percents={percent}>
      <p className="title">Daily Activity</p>
      <div className="progress-bar">
        <div className="track" />
        <p>{getFullTime(total)}</p>
      </div>
    </DayLoadContainer>
  );
}

const DayLoadContainer = styled.div<{percents: number}>`
  margin-bottom: 24px;

  .title {
    font-size: 0.875rem;
    color: #666666;

    margin-bottom: 8px;
  }

  .progress-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .track {
      height: 4px;
      width: 100%;

      margin-right: 24px;

      position: relative;
      overflow: hidden;

      background-color: #e5e5e5;
      border-radius: 2px;

      &:after {
        content: '';

        height: 100%;
        width: ${({percents}) => `${percents}%` || 0};

        transition: width 0.2s ease-in-out;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        background-color: ${({percents}) =>
          percents > 100 ? '#b00020' : '#2ebc4f'};
      }
    }
  }
`;
