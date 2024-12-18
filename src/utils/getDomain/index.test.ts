import { getDomain } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getDomain', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_INPUT = 'https://www.example.com/path/to/file.html';
    const EXAMPLE_OUTPUT = 'example.com';

    // Test assertions.
    expect(getDomain(EXAMPLE_INPUT)).toBe(EXAMPLE_OUTPUT);
  });
});
