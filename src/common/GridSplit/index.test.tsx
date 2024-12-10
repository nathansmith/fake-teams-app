import { render } from 'solid-js/web';
import GridSplit from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/GridSplit', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
    };

    // Component.
    const component = () => <GridSplit {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const div = document.querySelector('div') as HTMLElement;

    // Test assertions.
    expect(div.textContent).toBe(props.children);
  });
});
