import styled from 'styled-components/macro';

export const TimerContainer = styled.div`
  padding: 0 24px;
`;

export const NewTask = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr 56px;
  column-gap: 24px;
  align-items: center;

  margin-bottom: 24px;

  .timer {
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

export const DayProgress = styled.div<{percents: number}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;

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
`;

export const TaskList = styled.div`
  p {
    font-size: 0.875rem;
    color: #666666;

    margin-bottom: 8px;
  }
`;

export const TaskContainer = styled.div<{isOpen: boolean}>`
  padding: 0 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

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

    .period {
      width: 100%;
      height: 48px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-bottom: 1px solid #e0e0e0;

      p {
        font-size: 0.875rem;
      }
    }
  }
`;
