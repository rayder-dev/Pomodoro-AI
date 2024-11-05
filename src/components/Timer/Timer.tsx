import { FC, useState, useEffect, useMemo, useCallback } from 'react';
import { RingProgress } from '@mantine/core';
import Styles from './timer.module.css';
import { TimerLengthTypes } from '../../types';
import { useResponsiveSize } from '../../hooks';
import { StartBtn } from '..';
import { startCountdown, formatToTwoDigits } from '../../utils/timerUtils';

interface TimerProps {
  selectedTab: number;
  timerLength: TimerLengthTypes;
  modalOpen: () => void;
}

const Timer: FC<TimerProps> = ({ selectedTab, timerLength, modalOpen }) => {
  const ringSize = useResponsiveSize();
  const tabs = useMemo(
    () => [
      {
        title: 'Session',
        color: '#f77170',
        initialTime: timerLength.session,
        timerLabel: 'In session',
      },
      {
        title: 'Short Break',
        color: '#36c890',
        initialTime: timerLength.shortBreak,
        timerLabel: 'Take a break',
      },
      {
        title: 'Long Break',
        color: '#2083b0',
        initialTime: timerLength.longBreak,
        timerLabel: 'Take a break',
      },
    ],
    [timerLength]
  );

  const [timeLeft, setTimeLeft] = useState(tabs[0].initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const tabState = tabs[selectedTab];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // For Tabs & Timer Control
  useEffect(() => {
    setTimeLeft(tabState.initialTime);
    setIsRunning(false);
  }, [selectedTab, tabState.initialTime]);

  // For Timer
  useEffect(() => {
    if (!isRunning) return;
    const intervalId = startCountdown(timeLeft, setTimeLeft, modalOpen);
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft, modalOpen]);

  return (
    <div className={Styles['clock-container']}>
      <RingProgress
        size={ringSize}
        roundCaps
        sections={[
          {
            value: (timeLeft / tabState.initialTime) * 100,
            color: tabState.color,
          },
        ]}
        rootColor="transparent"
        label={
          <div className={Styles['clock-outer']}>
            <div className={Styles['clock-inner']}>
              <div className={Styles['clock-center']}>
                <div className={Styles['label']}>
                  {isRunning && timeLeft
                    ? tabState.timerLabel
                    : timeLeft === 0
                    ? 'Time is up!'
                    : timeLeft < tabState.initialTime && !isRunning
                    ? 'Paused'
                    : tabState.title}
                </div>
                <div className={Styles['time']}>
                  {formatToTwoDigits(minutes)}:{formatToTwoDigits(seconds)}
                </div>
                <StartBtn
                  text={isRunning ? 'PAUSE' : 'START'}
                  onClick={useCallback(() => setIsRunning((prev) => !prev), [])}
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Timer;
