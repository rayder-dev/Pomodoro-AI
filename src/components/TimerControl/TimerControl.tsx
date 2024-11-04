import { FC, useEffect, useReducer } from 'react';
import { ActionIcon, RingProgress, Center, rem } from '@mantine/core';
import { IconAlarmFilled } from '@tabler/icons-react';
import styles from './timerControl.module.css';
import { TimerLengthTypes } from '../../types';
import { formatTime } from '../../utils/timeFormatter';
import { Tooltip } from '..';

interface TimerControlProps {
  timerLength: TimerLengthTypes;
  setTimerLength: (value: TimerLengthTypes) => void;
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
  | { type: 'INCREMENT'; timer: keyof TimerLengthTypes }
  | { type: 'DECREMENT'; timer: keyof TimerLengthTypes }
  | { type: 'SET_TIMER_LENGTH'; payload: TimerLengthTypes };

// Reducer function to handle timer actions
const timerReducer = (
  state: TimerLengthTypes,
  action: Action
): TimerLengthTypes => {
  const adjustTime = (time: number) => time - (time % 300);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        [action.timer]: Math.min(6000, adjustTime(state[action.timer]) + 300),
      };
    case 'DECREMENT':
      return {
        ...state,
        [action.timer]: Math.max(300, adjustTime(state[action.timer]) - 300),
      };
    case 'SET_TIMER_LENGTH':
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

const TimerControl: FC<TimerControlProps> = ({
  timerLength,
  setTimerLength,
}) => {
  const [state, dispatch] = useReducer(timerReducer, timerLength);

  // Sync state with parent component whenever it changes
  useEffect(() => {
    setTimerLength(state);
  }, [state, setTimerLength]);

  return (
    <div className={styles['time-length']}>
      <TimeDisplay
        label="Session"
        time={state.session}
        color="#f77170"
        onIncrement={() => dispatch({ type: 'INCREMENT', timer: 'session' })}
        onDecrement={() => dispatch({ type: 'DECREMENT', timer: 'session' })}
      />
      <TimeDisplay
        label="Short break"
        time={state.shortBreak}
        color="#36c890"
        onIncrement={() => dispatch({ type: 'INCREMENT', timer: 'shortBreak' })}
        onDecrement={() => dispatch({ type: 'DECREMENT', timer: 'shortBreak' })}
      />
      <TimeDisplay
        label="Long break"
        time={state.longBreak}
        color="#2083b0"
        onIncrement={() => dispatch({ type: 'INCREMENT', timer: 'longBreak' })}
        onDecrement={() => dispatch({ type: 'DECREMENT', timer: 'longBreak' })}
      />
    </div>
  );
};

export default TimerControl;
