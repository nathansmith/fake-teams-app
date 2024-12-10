import { render } from 'solid-js/web';
import PanelEvents from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppMinistry/PanelEvents', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelEvents {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const h3 = parent.querySelector('h3') as HTMLElement;
    const divList = parent.querySelectorAll(':scope > div');

    // Test assertions.
    expect(h3.textContent).toBe('Upcoming events');
    expect(divList.length).toBeTruthy();
  });
});
