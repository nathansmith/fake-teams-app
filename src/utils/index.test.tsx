import * as all from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('utils', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const typeList = ['function', 'object'];

    // Loop through.
    Object.entries(all).forEach(([key, value]): void => {
      // Test assertions.
      expect(key.toUpperCase()).not.toBe(key);
      expect(typeList).toContain(typeof value);
    });
  });
});
