import { state } from '~/state';
import { storage } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalConversationId', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Constants.
    const DEFAULT = 'intro';
    const EXAMPLE = 'example';
    const KEY = 'state/signalConversationId';

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(undefined);
    expect(state.signalConversationId.get()).toBe(DEFAULT);

    // Fire events.
    state.signalConversationId.set(EXAMPLE);

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(EXAMPLE);
    expect(state.signalConversationId.get()).toBe(EXAMPLE);
  });
});
