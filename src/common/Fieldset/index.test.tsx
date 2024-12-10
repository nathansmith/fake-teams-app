import { render } from 'solid-js/web';
import Fieldset from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Fieldset', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_CHILDREN = 'EXAMPLE_CHILDREN';
    const EXAMPLE_LEGEND = 'EXAMPLE_LEGEND';

    const props = {
      children: <p>{EXAMPLE_CHILDREN}</p>,
      legend: EXAMPLE_LEGEND,
    };

    // Component.
    const component = () => <Fieldset {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const fieldset = document.querySelector('fieldset') as HTMLElement;
    const legend = document.querySelector('legend') as HTMLElement;

    // Test assertions.
    expect(legend.textContent).toBe(props.legend);
    expect(fieldset.querySelector('p')?.textContent).toBe(EXAMPLE_CHILDREN);
  });
});
