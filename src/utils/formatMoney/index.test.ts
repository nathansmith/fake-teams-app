import { formatMoney } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/formatMoney', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_INPUT = 1_000.1;
    const EXAMPLE_OUTPUT = '$1,000.10';

    // Test assertions.
    expect(formatMoney(EXAMPLE_INPUT)).toBe(EXAMPLE_OUTPUT);
  });
});
