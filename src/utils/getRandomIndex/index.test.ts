import { getRandomIndex } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getRandomIndex', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_COUNT = 10;
    const EXAMPLE_ARRAY = new Array(EXAMPLE_COUNT);

    // Get value.
    const value = getRandomIndex(EXAMPLE_ARRAY);

    // Test assertions.
    expect(-1 < value).toBe(true);
    expect(value < EXAMPLE_COUNT).toBe(true);
  });
});
