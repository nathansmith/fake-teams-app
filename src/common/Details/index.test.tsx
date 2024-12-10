import { render } from 'solid-js/web';
import Details from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Details', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
      open: true,
      summary: 'EXAMPLE_SUMMARY',
    };

    // Component.
    const component = () => <Details {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const details = document.querySelector('details') as HTMLDetailsElement;
    const summary = details.querySelector('summary') as HTMLElement;
    const divText = details.querySelector('div') as HTMLDivElement;

    // Test assertions.
    expect(details.open).toBe(props.open);
    expect(summary.textContent).toBe(props.summary);
    expect(divText.textContent).toBe(props.children);
  });
});
