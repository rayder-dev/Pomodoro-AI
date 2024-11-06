import { FC, useState, useEffect, useCallback } from 'react';
import { RingProgress } from '@mantine/core';
import Styles from './timer.module.css';
import { useResponsiveSize } from '../../hooks';
import { StartBtn } from '..';
import { startCountdown, formatToTwoDigits } from '../../utils/timerUtils';
import { TimerStateTypes } from '../../types';

interface TimerProps {
  timerState: TimerStateTypes;
  modalOpen: () => void;
}

const Timer: FC<TimerProps> = ({ timerState, modalOpen }) => {
  const ringSize = useResponsiveSize();
  const tabState = timerState.tabs[timerState.selectedTab];
  const [timeLeft, setTimeLeft] = useState(tabState.initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Separated because of Progress glitching
  const resetTimer = useCallback(
    (intervalId: NodeJS.Timeout) => {
      if (timeLeft === 0) {
        setProgress(100);
      }
      clearInterval(intervalId);
    },
    [isRunning]
  );

  // For Timer
  useEffect(() => {
    if (!isRunning) return;
    const intervalId = startCountdown(timeLeft, setTimeLeft, modalOpen);
    setProgress((timeLeft / tabState.initialTime) * 100);
    return () => resetTimer(intervalId);
  }, [isRunning, timeLeft, modalOpen]);

  // For Tabs & Timer Control
  useEffect(() => {
    setTimeLeft(tabState.initialTime);
    setIsRunning(false);
    setProgress(100);
  }, [timerState.selectedTab, tabState.initialTime]);

  return (
    <div className={Styles['clock-container']}>
      <RingProgress
        size={ringSize}
        roundCaps
        sections={[
          {
            value: progress,
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
                    : !isRunning && progress === 100
                    ? tabState.title
                    : timeLeft === 0
                    ? 'Time is up!'
                    : 'Paused'}
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
