import { FC, useState, useEffect, useMemo } from 'react';
import { RingProgress } from '@mantine/core';
import Styles from './timer.module.css';
import { TimerLength } from '../../containers/Home/Home';
import { useResponsiveSize } from '../../hooks/useResponsiveSize';
import StartButton from '../Button/StartButton';

interface Tab {
  title: string;
  color: string;
  initialTime: number;
  timerLabel: string;
}

interface TimerProps {
  selectedTab: number;
  reset: boolean;
  timerLength: TimerLength;
  modalOpen: () => void;
}

const Timer: FC<TimerProps> = ({
  selectedTab,
  reset,
  timerLength,
  modalOpen,
}) => {
  const ringSize = useResponsiveSize();
  const tabs: Tab[] = useMemo(
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
  const [tabState, setTabState] = useState({
    title: tabs[0].title,
    initialTime: tabs[0].initialTime,
    progressColor: tabs[0].color,
    timerLabel: tabs[0].timerLabel,
  });

  const [timeLeft, setTimeLeft] = useState(tabs[0].initialTime);
  const [progress, setProgress] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const { title, initialTime, progressColor, timerLabel } = tabState;

  // For Tabs
  useEffect(() => {
    const { title, initialTime: time, color, timerLabel } = tabs[selectedTab];
    setTabState({ title, initialTime: time, progressColor: color, timerLabel });
  }, [selectedTab, tabs]);

  // For Timer Control
  useEffect(() => {
    setTimeLeft(initialTime);
    setProgress(100);
    setIsRunning(false);
    setHasFinished(false);
  }, [initialTime]);

  // For Modal Reset
  useEffect(() => {
    if (reset) {
      setTimeLeft(initialTime);
      setProgress(100);
      setIsRunning(false);
      setHasFinished(false);
    }
  }, [reset]);

  // For Timer
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          setProgress((newTime / initialTime) * 100);
          return newTime;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (timeLeft === 0 && !hasFinished) {
      setIsRunning(false);
      setHasFinished(true);
      modalOpen();
    }
  }, [isRunning, timeLeft, initialTime, hasFinished]);

  // useEffect(() => {
  //   let intervalId: NodeJS.Timeout;

  //   if (isRunning && timeLeft > 0) {
  //     intervalId = setInterval(() => {
  //       setTimeLeft((prevTime) => {
  //         const newTime = prevTime - 1;
  //         setProgress((newTime / initialTime) * 100);
  //         return newTime;
  //       });
  //     }, 1000);
  //   } else if (timeLeft === 0 && !hasFinished) {
  //     setIsRunning(false);
  //     setHasFinished(true);
  //     modalOpen();
  //   }

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [isRunning, timeLeft, initialTime, hasFinished]);

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

  return (
    <div className={Styles['clock-container']}>
      <RingProgress
        size={ringSize}
        roundCaps
        sections={[{ value: progress, color: progressColor }]}
        rootColor="transparent"
        label={
          <div className={Styles['clock-outer']}>
            <div className={Styles['clock-inner']}>
              <div className={Styles['clock-center']}>
                <div className={Styles['label']}>
                  {isRunning
                    ? timerLabel
                    : timeLeft === 0
                    ? 'Time is up!'
                    : timeLeft < initialTime
                    ? 'Paused'
                    : title}
                </div>
                <div className={Styles['time']}>
                  {formatTime(minutes)}:{formatTime(seconds)}
                </div>
                <StartButton
                  text={isRunning ? 'PAUSE' : 'START'}
                  onClick={toggleTimer}
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
