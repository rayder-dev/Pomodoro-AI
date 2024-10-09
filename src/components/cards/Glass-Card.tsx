import { ReactNode } from 'react';
import Style from './styles/glass-card.module.css';

interface GlassCardProps {
  children: ReactNode;
  image: string;
  borderPosition: 'left' | 'right';
}

function GlassCard({ children, image, borderPosition }: GlassCardProps) {
  const borderRadius =
    borderPosition === 'right' ? 'var(--right)' : 'var(--left)';

  return (
    <div
      className={Style['card']}
      style={{
        backgroundImage: `url('/assets/${image}'`,
      }}
    >
      <div
        className={Style['glass']}
        style={{
          borderRadius: borderRadius,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default GlassCard;
