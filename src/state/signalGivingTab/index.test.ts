import { state } from '~/state';
import { storage } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalGivingTab', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const DEFAULT = 0;
    const EXAMPLE = 1;
    const KEY = 'state/signalGivingTab';

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(undefined);
    expect(state.signalGivingTab.get()).toBe(DEFAULT);

    // Fire events.
    state.signalGivingTab.set(EXAMPLE);

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(EXAMPLE);
    expect(state.signalGivingTab.get()).toBe(EXAMPLE);
  });
});
