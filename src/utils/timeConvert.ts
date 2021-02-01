export const getFullTime = (value: number) => {
  const hours = new Date(value).getUTCHours();
  const minutes = new Date(value).getMinutes();
  const seconds = new Date(value).getSeconds();

  const padding = (time: number) => {
    return time < 10 ? '0' : '';
  };

  return `${padding(hours)}${hours}:${padding(minutes)}${minutes}:${padding(
    seconds,
  )}${seconds}`;
};

export const getShortTime = (value: number) => {
  return new Date(value).toLocaleString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });
};

export const getDate = (value: number) => {
  return new Date(value).toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
