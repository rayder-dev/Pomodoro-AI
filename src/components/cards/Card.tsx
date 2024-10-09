import { ReactNode } from 'react';
import Style from './styles/card.module.css';

interface CardProps {
  children: ReactNode;
  image: string;
  borderPosition: 'left' | 'right';
}

function Card({ children, image, borderPosition }: CardProps) {
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

export default Card;
