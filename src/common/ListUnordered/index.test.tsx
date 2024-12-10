import { render } from 'solid-js/web';
import ListUnordered from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Link', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_LIST_ITEM = 'EXAMPLE_LIST_ITEM';

    const props = {
      children: <li>{EXAMPLE_LIST_ITEM}</li>,
    };

    // Component.
    const component = () => <ListUnordered {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const ul = document.querySelector('ul') as HTMLElement;

    // Test assertions.
    expect(ul.querySelector('li')?.textContent).toBe(EXAMPLE_LIST_ITEM);
  });
});
