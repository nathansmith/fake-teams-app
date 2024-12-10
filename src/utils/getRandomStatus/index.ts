import { getRandomIndex } from '../getRandomIndex';
import { STATUS_LIST } from '~/sharedConstants';

// ==========================
// Helper: get random status.
// ==========================

const getRandomStatus = (): (typeof STATUS_LIST)[number] => {
  // Get index.
  const index = getRandomIndex(STATUS_LIST);

  // Expose string.
  return STATUS_LIST[index];
};

// Export.
export { getRandomStatus };
