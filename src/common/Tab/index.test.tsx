import Tab from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Tab', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      icon: <span />,
      text: 'EXAMPLE_TEXT',
    };

    // Component.
    const tab = Tab(props);

    // Test assertions.
    expect(props).toEqual(tab);
  });
});
