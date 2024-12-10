import { render } from 'solid-js/web';
import AppChat from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppChat', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <AppChat {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const sidebar = document.querySelector('section:nth-of-type(1)');
    const content = document.querySelector('section:nth-of-type(2)');

    // Test assertions.
    expect(sidebar).toBeTruthy();
    expect(content).toBeTruthy();
  });
});
