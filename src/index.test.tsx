// ====================
// Describe `fileName`.
// ====================

describe('src/index', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', async (): Promise<void> => {
    // Test assertions.
    expect(document.body.innerHTML).toBeFalsy();

    // Load file.
    await import('./index');

    // Test assertions.
    expect(document.body.innerHTML).toBeTruthy();
  });
});
