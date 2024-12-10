import { state } from '~/state';
import { storage } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalSoccerId', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const DEFAULT = 'fusion-08b';
    const EXAMPLE = 'example';
    const KEY = 'state/signalSoccerId';

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(undefined);
    expect(state.signalSoccerId.get()).toBe(DEFAULT);

    // Fire events.
    state.signalSoccerId.set(EXAMPLE);

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(EXAMPLE);
    expect(state.signalSoccerId.get()).toBe(EXAMPLE);
  });
});
