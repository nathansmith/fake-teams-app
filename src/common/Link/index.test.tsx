import { render } from 'solid-js/web';
import Link from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Link', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
      href: 'https://example.com/',
      title: 'EXAMPLE_TITLE',
    };

    // Component.
    const component = () => <Link {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const link = document.querySelector('a') as HTMLElement;

    // Test assertions.
    expect(link.getAttribute('href')).toBe(props.href);
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('title')).toBe(props.title);
    expect(link.textContent).toBe(props.children);
  });
});
