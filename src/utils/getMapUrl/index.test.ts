import { getMapUrl } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getMapUrl', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_INPUT = '1234 Fifth Street \n Smallville, KS 54321';
    const EXAMPLE_OUTPUT = '1234%20Fifth%20Street%20Smallville,%20KS%2054321';

    // Test assertions.
    expect(getMapUrl(EXAMPLE_INPUT)).toBe(`https://www.google.com/maps?q=${EXAMPLE_OUTPUT}`);
  });
});
