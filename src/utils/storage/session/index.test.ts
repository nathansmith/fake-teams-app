import { storage } from '../';

// ====================
// Describe `fileName`.
// ====================

describe('utils/storage/session', (): void => {
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
    storage.session.set(EXAMPLE_KEY, EXAMPLE_VALUE);

    // Test assertions.
    expect(storage.session.get(EXAMPLE_KEY)).toEqual(EXAMPLE_VALUE);

    // Fire events.
    storage.session.remove(EXAMPLE_KEY);

    // Test assertions.
    expect(storage.session.get(EXAMPLE_KEY)).toBeFalsy();
  });

  // ======================
  // Test "clear" scenario.
  // ======================

  test('handles "clear" scenario', (): void => {
    // Dummy props.
    const EXAMPLE_KEY = 'EXAMPLE_KEY';
    const EXAMPLE_VALUE = true;

    // Fire events.
    storage.session.set(EXAMPLE_KEY, EXAMPLE_VALUE);

    // Test assertions.
    expect(storage.session.get(EXAMPLE_KEY)).toBe(EXAMPLE_VALUE);

    // Fire events.
    storage.session.clear();

    // Test assertions.
    expect(storage.session.get(EXAMPLE_KEY)).toBeFalsy();
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
      storage.session.set(EXAMPLE_KEY, EXAMPLE_VALUE);
    }).toThrowError(
      // Error.
      new Error(`Cannot overwrite method: globalThis.sessionStorage.${EXAMPLE_KEY}`)
    );
  });
});
