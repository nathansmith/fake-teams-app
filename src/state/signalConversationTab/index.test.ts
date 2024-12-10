import { state } from '~/state';
import { storage } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalConversationTab', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const DEFAULT = 0;
    const EXAMPLE = 1;
    const KEY = 'state/signalConversationTab';

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(undefined);
    expect(state.signalConversationTab.get()).toBe(DEFAULT);

    // Fire events.
    state.signalConversationTab.set(EXAMPLE);

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(EXAMPLE);
    expect(state.signalConversationTab.get()).toBe(EXAMPLE);
  });
});
