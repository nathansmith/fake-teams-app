import { render } from 'solid-js/web';
import Loading from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Loading', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <Loading {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const div = document.querySelector('div') as HTMLElement;

    // Test assertions.
    expect(div.textContent).toBe('Loading');
  });
});
