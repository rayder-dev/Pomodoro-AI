import { useMediaQuery } from '@mantine/hooks';

// Custom hook to handle multiple breakpoints
export const useResponsiveSize = () => {
  const isExtraSmallScreen = useMediaQuery('(min-width: 350px)');
  const isSmallScreen = useMediaQuery('(min-width: 480px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px)');
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');
  const isExtraLargeScreen = useMediaQuery('(min-width: 1921px)');

  const size = isExtraLargeScreen
    ? 620
    : isLargeScreen
    ? 548
    : isMediumScreen
    ? 487
    : isSmallScreen
    ? 436
    : isExtraSmallScreen
    ? 377
    : 278;

  return size;
};
