import { useCallback, useMemo, useState } from 'react';
import { Divider } from '@mantine/core';
import styles from './home.module.css';
import { TimerStateTypes } from '../../types';
import { Faq, Pomodoro, Privacy, Terms } from '../';
import {
  AlarmModal,
  AiDrawer,
  Footer,
  Header,
  PomoTally,
  Tabs,
  Timeline,
  Timer,
  TimerControl,
  Todo,
} from '../../components';

const Home = () => {
  const alarm = useMemo(() => new Audio('/assets/sounds/alarm.mp3'), []);
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [taskCount, setTaskCount] = useState(3);
  const [cycleCount, setCycleCount] = useState(0);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState('Home');
  const [sessionStatus, setSessionStatus] = useState({
    count: 0,
    time: '',
  });
  const tabs = useMemo(
    () => [
      {
        title: 'Session',
        color: '#f77170',
        initialTime: 2,
        timerLabel: 'In session',
      },
      {
        title: 'Short Break',
        color: '#36c890',
        initialTime: 2,
        timerLabel: 'Take a break',
      },
      {
        title: 'Long Break',
        color: '#2083b0',
        initialTime: 1,
        timerLabel: 'Take a break',
      },
    ],
    []
  );
  const [timerState, setTimerState] = useState<TimerStateTypes>({
    selectedTab: 0,
    tabs,
  });

  const cycleTab = useCallback(() => {
    if (timerState.selectedTab === 0) {
      if (cycleCount < 3) {
        setTimerState({ ...timerState, selectedTab: 1 });
        setTimelineIndex(cycleCount < 1 ? 1 : 2);
        setCycleCount(cycleCount + 1);
      } else {
        setTimerState({ ...timerState, selectedTab: 2 });
        setTimelineIndex(3);
        setCycleCount(0);
      }
    } else {
      setTimerState({ ...timerState, selectedTab: 0 });
      setTimelineIndex(cycleCount > 0 ? 2 : 0);
    }
  }, [timerState.selectedTab, cycleCount]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    const currentTime = new Date();
    setModalOpen(false);
    cycleTab();
    if (timerState.selectedTab === 0) {
      setSessionStatus((prev) => ({
        count: prev.count + 1,
        time: currentTime.toLocaleTimeString(),
      }));
    }
  };

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <>
      <Header onDrawerOpen={handleDrawerOpen} />
      <main>
        <section className={styles['section']}>
          <div className={styles['grid-container']}>
            <div className={`${styles['grid-item']} ${styles['item1']}`}>
              <Tabs timerState={timerState} onSelect={setTimerState} />
              <Timer timerState={timerState} modalOpen={handleModalOpen} />
            </div>
            <div className={`${styles['grid-item']} ${styles['item2']}`}>
              <Todo sessionStatus={sessionStatus} setTaskCount={setTaskCount} />
            </div>
            <div className={`${styles['grid-item']} ${styles['item3']}`}>
              <TimerControl
                timerState={timerState}
                setTimerState={setTimerState}
              />
              <Timeline activeIndex={timelineIndex} cycleCount={cycleCount} />
            </div>
          </div>
        </section>

        <section>
          <div className={styles['tally-container']}>
            <PomoTally
              title="Task List"
              value={0}
              color="#f77170"
              subtitle="Today's Ongoing tasks"
              taskCount={taskCount}
            />
            <PomoTally
              title="Task Completed"
              value={0}
              color="#36c890"
              subtitle="Total completed tasks"
            />
            <PomoTally
              title="Current Streak"
              value={0}
              color="#f9a976"
              subtitle="Current streak of daily productivity"
            />
            <PomoTally
              title="Longest Streak"
              value={0}
              color="#2083b0"
              subtitle="Longest streak of daily productivity"
            />
          </div>
        </section>

        <Divider size="xl" />

        <section>
          {currentSection === 'Home' && <Pomodoro alarmSound={alarm} />}
          {currentSection === 'Privacy' && <Privacy />}
          {currentSection === 'Terms' && <Terms />}
          {currentSection === 'FAQ' && <Faq />}
        </section>
      </main>
      <Footer section={handleSectionChange} />
      <AlarmModal
        opened={modalOpen}
        close={handleModalClose}
        alarmSound={alarm}
        selectedTab={timerState.selectedTab}
      />
      <AiDrawer opened={drawerOpen} close={handleDrawerClose} />
    </>
  );
};

export default Home;
