import { getRandomStatus } from './';
import { STATUS_LIST } from '~/sharedConstants';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getRandomStatus', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Get value.
    const value = getRandomStatus();

    // Test assertions.
    expect(STATUS_LIST.includes(value)).toBe(true);
  });
});
