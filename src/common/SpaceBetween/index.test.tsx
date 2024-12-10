import { render } from 'solid-js/web';
import SpaceBetween from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/SpaceBetween', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
    };

    // Component.
    const component = () => <SpaceBetween {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const div = document.querySelector('div') as HTMLElement;

    // Test assertions.
    expect(div.textContent).toBe(props.children);
  });
});
