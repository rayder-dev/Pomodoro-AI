// timerUtils.ts
export function startCountdown(
  initialTime: number,
  updateTime: (newTime: number) => void,
  onComplete: () => void
) {
  let currentTime = initialTime;

  const intervalId = setInterval(() => {
    currentTime -= 1;
    if (currentTime <= 0) {
      clearInterval(intervalId);
      onComplete();
      updateTime(0);
    } else {
      updateTime(currentTime);
    }
  }, 1000);

  return intervalId;
}

export const formatToTwoDigits = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};
