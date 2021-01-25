export const timeConvert = (value: number) => {
  const hours = Math.floor(value / 60 / 60);
  const minutes = Math.floor(value / 60) % 60;
  const seconds = value % 60;

  const padding = (time: number) => {
    return time < 10 ? '0' : '';
  };

  return `${padding(hours)}${hours}:${padding(minutes)}${minutes}:${padding(
    seconds,
  )}${seconds}`;
};
