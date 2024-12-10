import { storage } from '../';

// ====================
// Describe `fileName`.
// ====================

describe('utils/storage/local', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_KEY = 'EXAMPLE_KEY';

    const EXAMPLE_VALUE = {
      bool: true,
    };

    // Fire events.
    storage.local.set(EXAMPLE_KEY, EXAMPLE_VALUE);

    // Test assertions.
    expect(storage.local.get(EXAMPLE_KEY)).toEqual(EXAMPLE_VALUE);

    // Fire events.
    storage.local.remove(EXAMPLE_KEY);

    // Test assertions.
    expect(storage.local.get(EXAMPLE_KEY)).toBeFalsy();
  });

  // ======================
  // Test "clear" scenario.
  // ======================

  test('handles "clear" scenario', (): void => {
    // Dummy props.
    const EXAMPLE_KEY = 'EXAMPLE_KEY';
    const EXAMPLE_VALUE = true;

    // Fire events.
    storage.local.set(EXAMPLE_KEY, EXAMPLE_VALUE);

    // Test assertions.
    expect(storage.local.get(EXAMPLE_KEY)).toBe(EXAMPLE_VALUE);

    // Fire events.
    storage.local.clear();

    // Test assertions.
    expect(storage.local.get(EXAMPLE_KEY)).toBeFalsy();
  });

  // ========================
  // Test "bad key" scenario.
  // ========================

  test('handles "bad key" scenario', (): void => {
    // Dummy props.
    const EXAMPLE_KEY = 'getItem';
    const EXAMPLE_VALUE = true;

    // Test assertions.
    expect((): void => {
      // Fire events.
      storage.local.set(EXAMPLE_KEY, EXAMPLE_VALUE);
    }).toThrowError(
      // Error.
      new Error(`Cannot overwrite method: globalThis.localStorage.${EXAMPLE_KEY}`)
    );
  });
});
