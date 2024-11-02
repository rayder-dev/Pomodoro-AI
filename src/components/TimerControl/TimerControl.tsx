import { FC, useEffect, useState } from 'react';
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
  const [sessionTime, setSessionTime] = useState(timerLength.session);
  const [shortBreakTime, setShortBreakTime] = useState(timerLength.shortBreak);
  const [longBreakTime, setLongBreakTime] = useState(timerLength.longBreak);

  useEffect(() => {
    setTimerLength({
      session: sessionTime,
      shortBreak: shortBreakTime,
      longBreak: longBreakTime,
    });
  }, [sessionTime, shortBreakTime, longBreakTime, setTimerLength]);

  const adjustTime = (time: number) => time - (time % 300);

  const incrementTime = (
    setTime: React.Dispatch<React.SetStateAction<number>>,
    time: number
  ) => {
    const adjustedTime = adjustTime(time);
    setTime(Math.min(6000, adjustedTime + 300)); // Adds 300 seconds but caps at 6000 seconds (100 minutes)
  };

  const decrementTime = (
    setTime: React.Dispatch<React.SetStateAction<number>>,
    time: number
  ) => {
    const adjustedTime = adjustTime(time);
    setTime(Math.max(300, adjustedTime - 300)); // Subtracts 300 seconds but keeps it at or above 0
  };

  return (
    <div className={styles['time-length']}>
      <TimeDisplay
        label="Session"
        time={sessionTime}
        color="#f77170"
        onIncrement={() => incrementTime(setSessionTime, sessionTime)}
        onDecrement={() => decrementTime(setSessionTime, sessionTime)}
      />
      <TimeDisplay
        label="Short break"
        time={shortBreakTime}
        color="#36c890"
        onIncrement={() => incrementTime(setShortBreakTime, shortBreakTime)}
        onDecrement={() => decrementTime(setShortBreakTime, shortBreakTime)}
      />
      <TimeDisplay
        label="Long break"
        time={longBreakTime}
        color="#2083b0"
        onIncrement={() => incrementTime(setLongBreakTime, longBreakTime)}
        onDecrement={() => decrementTime(setLongBreakTime, longBreakTime)}
      />
    </div>
  );
};

export default TimerControl;
