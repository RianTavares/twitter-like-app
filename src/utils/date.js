export const getSecsFromNow = (postTime) => {
  const oneSecondInMs = 1000;
  const now = Date.now();
  const distance = now - postTime;
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= oneSecondInMs) {
    return 'a second ago';
  }

  // Seconds
  if (distance < 60000) {
    return `${seconds} seconds ago`;
  }

  // 1 Minute
  if (distance === 60000) {
    return 'a minute ago';
  }
  // Minutes
  if (distance < 3600000) {
    return `${minutes}m`;
  }
  // 1 Hour
  if (distance === 3600000) {
    return 'an hour ago';
  }
  // Hours
  return `${hours}h`;
};
