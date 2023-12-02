export const formatAnDivideNumber = (number: number): string => {
  if (number >= 1000000) {
    const formattedNumber = (number / 1000000).toFixed(2);
    return `${formattedNumber}M`;
  } else if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(2);
    return `${formattedNumber}K`;
  } else {
    return number.toString();
  }
};
