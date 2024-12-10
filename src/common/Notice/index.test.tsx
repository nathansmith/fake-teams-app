import { render } from 'solid-js/web';
import Notice from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Notice', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
    };

    // Component.
    const component = () => <Notice {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const div = document.querySelector('div') as HTMLElement;

    // Test assertions.
    expect(div.getAttribute('aria-live')).toBe('polite');
    expect(div.textContent).toBe(props.children);
  });
});
