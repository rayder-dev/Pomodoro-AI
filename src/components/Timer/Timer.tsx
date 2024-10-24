import StartButton from '../Buttons/StartButton';
import { RingProgress } from '@mantine/core';
import Styles from './timer.module.css';
import { useResponsiveSize } from '../../hooks/useResponsiveSize';

const Timer: React.FC = () => {
  const ringSize = useResponsiveSize();

  return (
    <div className={Styles['clock-container']}>
      <RingProgress
        size={ringSize}
        roundCaps
        sections={[{ value: 66, color: '#f77170' }]}
        rootColor="transparent"
        label={
          <div className={Styles['clock-outer']}>
            <div className={Styles['clock-inner']}>
              <div className={Styles['clock-center']}>
                <div className={Styles['label']}>In session</div>
                {/* In session / Take a
                break */}
                <div className={Styles['time']}>25:00</div>
                <StartButton text="START" />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Timer;
