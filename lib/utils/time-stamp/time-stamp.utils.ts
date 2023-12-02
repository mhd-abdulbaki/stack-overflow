export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diff = Math.abs(now.getTime() - createdAt.getTime());

  const timeInSeconds = Math.floor(diff / 1000);
  const timeInMinutes = Math.floor(timeInSeconds / 60);
  const timeInHours = Math.floor(timeInMinutes / 60);
  const timeInDays = Math.floor(timeInHours / 24);
  const timeInMonths = Math.floor(timeInDays / 30);
  const timeInYears = Math.floor(timeInMonths / 12);

  if (timeInYears >= 1) {
    return `${timeInYears} year${timeInYears !== 1 ? "s" : ""} ago`;
  } else if (timeInMonths >= 1) {
    return `${timeInMonths} month${timeInMonths !== 1 ? "s" : ""} ago`;
  } else if (timeInDays >= 1) {
    return `${timeInDays} day${timeInDays !== 1 ? "s" : ""} ago`;
  } else if (timeInHours >= 1) {
    return `${timeInHours} hour${timeInHours !== 1 ? "s" : ""} ago`;
  } else if (timeInMinutes >= 1) {
    return `${timeInMinutes} minute${timeInMinutes !== 1 ? "s" : ""} ago`;
  } else {
    return `${timeInSeconds} second${timeInSeconds !== 1 ? "s" : ""} ago`;
  }
};
