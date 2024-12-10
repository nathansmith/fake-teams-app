import { render } from 'solid-js/web';
import FlexStack from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/FlexStack', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
    };

    // Component.
    const component = () => <FlexStack {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const div = document.querySelector('div') as HTMLElement;

    // Test assertions.
    expect(div.textContent).toBe(props.children);
  });

  // =============================
  // Test "HTML content" scenario.
  // =============================

  test('handles "HTML content" scenario', (): void => {
    // Dummy props.
    const EXAMPLE_CONTENT = 'EXAMPLE_CONTENT';

    const props = {
      html: `<p>${EXAMPLE_CONTENT}</p>`,
    };

    // Component.
    const component = () => <FlexStack {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const div = document.querySelector('div') as HTMLElement;

    // Test assertions.
    expect(div.querySelector('p')?.textContent).toBe(EXAMPLE_CONTENT);
  });
});
