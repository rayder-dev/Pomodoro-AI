import { FC } from 'react';
import { ThemeIcon, Text, Timeline } from '@mantine/core';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerPauseFilled,
  IconRotateClockwise,
} from '@tabler/icons-react';
import RefreshLoader from '../Loader/RefreshLoader';

interface TimelineItem {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

interface PomoTimelineProps {
  activeIndex: number;
  cycleCount: number;
}

const PomoTimeline: FC<PomoTimelineProps> = ({ activeIndex, cycleCount }) => {
  const repeatItem: TimelineItem = {
    title: `Repeat ${4 - cycleCount}x`,
    description: `Repeat the cycle for ${4 - cycleCount} times`,
    icon: <IconRotateClockwise size="1.5rem" color="#f9a976" />,
    color: '#de986f',
  };

  const timelineData: TimelineItem[] = [
    {
      title: 'Session',
      description: 'Start a pomodoro session and work on your task',
      icon: <IconPlayerPlay size="1.5rem" color="#f77170" />,
      color: '#de986f',
    },
    {
      title: 'Short break',
      description: 'Take a short break',
      icon: <IconPlayerPause size="1.5rem" color="#36c890" />,
      color: '#de986f',
    },
    repeatItem,
    {
      title: 'Long break',
      description: 'Take a longer break',
      icon: <IconPlayerPauseFilled size="1.5rem" color="#2083b0" />,
      color: '#de986f',
    },
  ];
  return (
    <Timeline
      lineWidth={2}
      bulletSize={50}
      align="right"
      active={activeIndex}
      color="#f77170"
      style={{ width: '100%' }}
    >
      {timelineData.map((item, index) => (
        <Timeline.Item
          key={index}
          title={<Text style={{ color: item.color }}>{item.title}</Text>}
          bullet={
            <ThemeIcon
              size={40}
              radius="xl"
              style={{
                background:
                  'radial-gradient(circle at 50% 0%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)',
                color: 'white',
              }}
            >
              {activeIndex === 2 && index === 2 ? <RefreshLoader /> : item.icon}
            </ThemeIcon>
          }
        >
          <Text
            c="dimmed"
            size="sm"
            style={{ maxWidth: '200px', justifySelf: 'flex-end' }}
          >
            {item.description}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default PomoTimeline;
