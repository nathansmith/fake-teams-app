import { getChildren } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getChildren', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_CHILDREN = 'EXAMPLE_CHILDREN';

    const props = {
      children: 'EXAMPLE_CHILDREN',
    };

    // Get value.
    const value = getChildren(props);

    // Test assertions.
    expect(Array.isArray(value)).toBe(true);
    expect(value).toEqual([EXAMPLE_CHILDREN]);
  });
});
