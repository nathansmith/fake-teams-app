import * as all from '~/sharedConstants';

// ====================
// Describe `fileName`.
// ====================

describe('utils/sharedConstants', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const typeList = ['object', 'string'];

    // Loop through.
    Object.entries(all).forEach(([key, value]): void => {
      // Test assertions.
      expect(key.toUpperCase()).toBe(key);
      expect(typeList).toContain(typeof value);
    });
  });
});
