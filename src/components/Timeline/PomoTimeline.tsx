import { ThemeIcon, Text, Timeline } from '@mantine/core';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconRefresh,
  IconPlayerPauseFilled,
  IconRotateClockwise,
} from '@tabler/icons-react';

const PomoTimeline: React.FC = () => {
  return (
    <Timeline
      lineWidth={2}
      bulletSize={40}
      align="right"
      active={0}
      color="#23bab1"
      style={{ width: '100%' }}
    >
      <Timeline.Item
        title={<Text style={{ color: '#de986f' }}>Session</Text>}
        bullet={
          <ThemeIcon
            size={30}
            radius="xl"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)',
              color: 'white',
            }}
          >
            <IconPlayerPlay size="1.5rem" color="#f77170" />
          </ThemeIcon>
        }
      >
        <Text
          c="dimmed"
          size="sm"
          style={{ maxWidth: '200px', justifySelf: 'flex-end' }}
        >
          Start a pomodoro session and work on your task
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title={
          <Text style={{ color: '#de986f', whiteSpace: 'nowrap' }}>
            Short break
          </Text>
        }
        bullet={
          <ThemeIcon
            size={30}
            radius="xl"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)',
              color: 'white',
            }}
          >
            <IconPlayerPause size="1.5rem" color="#36c890" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Take a short break
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title={
          <Text style={{ color: '#de986f', whiteSpace: 'nowrap' }}>
            Repeat 4x
          </Text>
        }
        bullet={
          <ThemeIcon
            size={30}
            radius="xl"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)',
              color: 'white',
            }}
          >
            <IconRefresh size="1.5rem" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Repeat the cycle for 4 times
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title={
          <Text style={{ color: '#de986f', whiteSpace: 'nowrap' }}>
            Long break
          </Text>
        }
        bullet={
          <ThemeIcon
            size={30}
            radius="xl"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)',
              color: 'white',
            }}
          >
            <IconPlayerPauseFilled size="1.5rem" color="#2083b0" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Take a longer break
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title={<Text style={{ color: '#de986f' }}>Repeat </Text>}
        bullet={
          <ThemeIcon
            size={30}
            radius="xl"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)',
              color: 'white',
            }}
          >
            <IconRotateClockwise size="1.5rem" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Repeat from the start
        </Text>
      </Timeline.Item>
    </Timeline>
  );
};

export default PomoTimeline;
