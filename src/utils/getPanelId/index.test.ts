import { getPanelId } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getPanelId', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Test assertions.
    expect(getPanelId('ID', 0)).toBe('tabpanel-ID-0');
  });
});
