import TabPanel from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/TabPanel', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
      isScroll: true,
      isScrollBottom: true,
    };

    // Component.
    const tabPanel = TabPanel(props);

    // Test assertions.
    expect(props).toEqual(tabPanel);
  });
});
