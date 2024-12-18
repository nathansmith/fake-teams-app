import { getTabId } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getTabId', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Test assertions.
    expect(getTabId('ID', 0)).toBe('tab-ID-0');
  });
});
