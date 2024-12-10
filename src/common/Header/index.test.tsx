import { render } from 'solid-js/web';
import Header from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Header', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
    };

    // Component.
    const component = () => <Header {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const header = document.querySelector('header') as HTMLElement;

    // Test assertions.
    expect(header.textContent).toBe(props.children);
  });
});
