import { state } from '~/state';

// ====================
// Describe `fileName`.
// ====================

describe('state/signalChatSidebarActive', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Test assertions.
    expect(state.signalChatSidebarActive.get()).toBe(false);

    // Fire events.
    state.signalChatSidebarActive.set(true);

    // Test assertions.
    expect(state.signalChatSidebarActive.get()).toBe(true);
  });
});
