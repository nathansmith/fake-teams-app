import { render } from 'solid-js/web';
import Layout from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Layout', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
    };

    // Component.
    const component = () => <Layout {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.body.querySelector('div') as HTMLElement;
    const header = parent.querySelector(':scope > header') as HTMLElement;
    const nav = parent.querySelector(':scope > nav') as HTMLElement;
    const main = parent.querySelector(':scope > main') as HTMLElement;

    // Test assertions.
    expect(header).toBeTruthy();
    expect(nav).toBeTruthy();
    expect(main.textContent).toBe(props.children);
  });
});
