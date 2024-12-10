import { state } from '~/state';
import { storage } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalSoccerTab', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const DEFAULT = 0;
    const EXAMPLE = 1;
    const KEY = 'state/signalSoccerTab';

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(undefined);
    expect(state.signalSoccerTab.get()).toBe(DEFAULT);

    // Fire events.
    state.signalSoccerTab.set(EXAMPLE);

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(EXAMPLE);
    expect(state.signalSoccerTab.get()).toBe(EXAMPLE);
  });
});
