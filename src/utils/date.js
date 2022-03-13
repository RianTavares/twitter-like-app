/* eslint-disable import/prefer-default-export */
export const getSecsFromNow = (postTime) => {
  const oneSecondInMs = 1000;
  const now = Date.now();
  const distance = now - postTime;
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= oneSecondInMs) {
    return 'a second ago';
  }

  return `${seconds} seconds ago`;
};
