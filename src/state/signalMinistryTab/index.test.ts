import { state } from '~/state';
import { storage } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalMinistryTab', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const DEFAULT = 0;
    const EXAMPLE = 1;
    const KEY = 'state/signalMinistryTab';

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(undefined);
    expect(state.signalMinistryTab.get()).toBe(DEFAULT);

    // Fire events.
    state.signalMinistryTab.set(EXAMPLE);

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(EXAMPLE);
    expect(state.signalMinistryTab.get()).toBe(EXAMPLE);
  });
});
