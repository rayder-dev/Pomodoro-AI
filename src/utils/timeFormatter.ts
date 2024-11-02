/**
 * Converts seconds to a formatted time string in minutes and seconds.
 * @param timeInSeconds - Time in seconds
 * @returns Formatted string in "min" or "sec" format
 */
export function formatTime(timeInSeconds: number): string {
  const timeInMinutes = Math.floor(timeInSeconds / 60);
  return timeInSeconds >= 60 ? `${timeInMinutes} min` : `${timeInSeconds} sec`;
}
