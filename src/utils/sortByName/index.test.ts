import { sortByName } from '~/utils';

// ====================
// Describe `fileName`.
// ====================

describe('utils/sortByName', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const LIST_BEFORE = [{ name: 'B' }, { name: 'C' }, { name: 'A' }];
    const LIST_AFTER = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];

    // Test assertions.
    expect(sortByName(LIST_BEFORE)).toEqual(LIST_AFTER);
  });
});
