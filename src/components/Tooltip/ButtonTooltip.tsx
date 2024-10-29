import { FloatingPosition, MantineTransition, Tooltip } from '@mantine/core';
import { FC, ReactNode } from 'react';

interface ButtonTooltipProps {
  children: ReactNode;
  label: string;
  position: FloatingPosition;
  color: string;
  transition: MantineTransition;
}

const ButtonTooltip: FC<ButtonTooltipProps> = ({
  children,
  label,
  position,
  color,
  transition,
}) => {
  return (
    <Tooltip
      label={label}
      color={color}
      position={position}
      withArrow
      arrowSize={8}
      transitionProps={{ transition: transition, duration: 300 }}
    >
      {children}
    </Tooltip>
  );
};

export default ButtonTooltip;
