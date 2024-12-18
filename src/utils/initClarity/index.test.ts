import { initClarity } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/initClarity', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_VALUE = 'EXAMPLE_VALUE';

    // Dummy content.
    document.body.innerHTML = `
      <script></script>
    `;

    // Kickoff.
    initClarity();

    // Get elements.
    const scriptList = document.querySelectorAll('script');

    // Test assertions.
    expect(scriptList.length).toBe(2);

    // @ts-expect-error ARGS
    globalThis.clarity(EXAMPLE_VALUE);

    // @ts-expect-error ARGS
    expect(...globalThis.clarity.q[0]).toEqual(EXAMPLE_VALUE);
  });
});
