import { state } from '~/state';
import { storage } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalGivingId', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const DEFAULT = '';
    const EXAMPLE = 'example';
    const KEY = 'state/signalGivingId';

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(undefined);
    expect(state.signalGivingId.get()).toBe(DEFAULT);

    // Fire events.
    state.signalGivingId.set(EXAMPLE);

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(EXAMPLE);
    expect(state.signalGivingId.get()).toBe(EXAMPLE);
  });
});
