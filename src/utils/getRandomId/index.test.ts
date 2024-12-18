import { getRandomId } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getRandomId', (): void => {
  // ==========
  // Constants.
  // ==========

  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Get value.
    const value = getRandomId();

    // Test assertions.
    expect(uuidRegex.test(value)).toBe(true);
  });

  // =========================
  // Test "fallback" scenario.
  // =========================

  test('handles "fallback" scenario', (): void => {
    // Override.
    Object.defineProperty(globalThis, 'crypto', {
      value: {
        randomUUID: vi.fn(),
        writable: true,
      },
    });

    // Get value.
    const value = getRandomId();
    const valueSplit = value.split('-');
    const valueItem1 = parseFloat(valueSplit[0]);
    const valueItem2 = parseFloat(valueSplit[1]);

    // Test assertions.
    expect(globalThis.crypto.randomUUID).toBeCalled();

    expect(uuidRegex.test(value)).toBe(false);
    expect(valueSplit).toHaveLength(2);

    expect(valueItem1).toBeTypeOf('number');
    expect(valueItem2).toBeTypeOf('number');

    expect(valueItem1).not.toBeNaN();
    expect(valueItem2).not.toBeNaN();
  });
});
