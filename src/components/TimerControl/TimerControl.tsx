import { FC, useEffect, useReducer } from 'react';
import { ActionIcon, RingProgress, Center, rem } from '@mantine/core';
import { IconAlarmFilled } from '@tabler/icons-react';
import styles from './timerControl.module.css';
import { TimerStateTypes } from '../../types';
import { formatTime } from '../../utils/timeFormatter';
import { Tooltip } from '..';

interface TimerControlProps {
  timerState: TimerStateTypes;
  setTimerState: (value: TimerStateTypes) => void;
}

interface TimeDisplayProps {
  label: string;
  time: number;
  color: string;
  onIncrement: () => void;
  onDecrement: () => void;
}

// Action types for the reducer
type Action =
  | { type: 'INCREMENT'; index: number }
  | { type: 'DECREMENT'; index: number }
  | { type: 'SET_TIMER_STATE'; payload: TimerStateTypes };

// Reducer function to handle timer actions
const timerReducer = (
  state: TimerStateTypes,
  action: Action
): TimerStateTypes => {
  const adjustTime = (time: number) => time - (time % 300);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        selectedTab: action.index,
        tabs: state.tabs.map((tab, i) =>
          i === action.index
            ? {
                ...tab,
                initialTime: Math.min(6000, adjustTime(tab.initialTime) + 300),
              }
            : tab
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        selectedTab: action.index,
        tabs: state.tabs.map((tab, i) =>
          i === action.index
            ? {
                ...tab,
                initialTime: Math.max(300, adjustTime(tab.initialTime) - 300),
              }
            : tab
        ),
      };
    case 'SET_TIMER_STATE':
      return action.payload;
    default:
      return state;
  }
};

const TimeDisplay: FC<TimeDisplayProps> = ({
  label,
  time,
  color,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className={styles['time-container']}>
      <div className={styles['time-wrapper']}>
        <span className={styles['time-header']}>{label}</span>
        <p className={styles['time-session-display']}>{formatTime(time)}</p>
        <div className={styles['time-btn-wrapper']}>
          <button className={styles['minus']} onClick={onDecrement}>
            -
          </button>
          <button className={styles['plus']} onClick={onIncrement}>
            +
          </button>
        </div>
      </div>
      <RingProgress
        size={110}
        roundCaps
        sections={[{ value: Math.floor(time / 60), color }]}
        rootColor="#28232e90"
        label={
          <Center>
            <Tooltip
              label={'Save'}
              position={'right'}
              color={color}
              transition="rotate-right"
            >
              <ActionIcon color={color} variant="light" radius="xl" size="xl">
                <IconAlarmFilled style={{ width: rem(35), height: rem(35) }} />
              </ActionIcon>
            </Tooltip>
          </Center>
        }
      />
    </div>
  );
};

const TimerControl: FC<TimerControlProps> = ({ timerState, setTimerState }) => {
  const [state, dispatch] = useReducer(timerReducer, timerState);

  // Sync state with parent component whenever it changes
  useEffect(() => {
    setTimerState(state);
  }, [state, setTimerState]);

  return (
    <div className={styles['time-length']}>
      {state.tabs.map((tab, index) => (
        <TimeDisplay
          key={index}
          label={tab.title}
          time={tab.initialTime}
          color={tab.color}
          onIncrement={() => dispatch({ type: 'INCREMENT', index })}
          onDecrement={() => dispatch({ type: 'DECREMENT', index })}
        />
      ))}
    </div>
  );
};

export default TimerControl;
