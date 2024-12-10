import { state } from '~/state';
import { storage } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalAppId', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const DEFAULT = 'chat';
    const EXAMPLE = 'example';
    const KEY = 'state/signalAppId';

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(undefined);
    expect(state.signalAppId.get()).toBe(DEFAULT);

    // Fire events.
    state.signalAppId.set(EXAMPLE);

    // Test assertions.
    expect(storage.local.get(KEY)).toBe(EXAMPLE);
    expect(state.signalAppId.get()).toBe(EXAMPLE);
    expect(state.signalChatSidebarActive.get()).toBe(false);

    // Fire events.
    state.signalAppId.set(DEFAULT);

    // Test assertions.
    expect(state.signalChatSidebarActive.get()).toBe(true);

    // Fire events.
    state.signalAppId.set(DEFAULT);

    // Test assertions.
    expect(state.signalChatSidebarActive.get()).toBe(false);
  });
});
