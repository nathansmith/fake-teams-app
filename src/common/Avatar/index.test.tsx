import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Avatar from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Avatar', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      alt: 'EXAMPLE_ALT',
      image: '/path/to/image.webp',
      size: 48,
      status: 'online',
    };

    // Component.
    const component = () => <Avatar {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const figure = document.querySelector('figure') as HTMLElement;
    const img = figure.querySelector('img') as HTMLElement;
    const span = figure.querySelector('span') as HTMLElement;

    // Test assertions.
    expect(globalThis.getComputedStyle(figure).getPropertyValue('--avatar-size')).toBe(
      `${props.size}px`
    );

    expect(img.getAttribute('alt')).toBe(props.alt);
    expect(img.getAttribute('title')).toBe(props.alt);
    expect(img.getAttribute('src')).toBe(props.image);
    expect(span.getAttribute('aria-label')).toBe('Online');
    expect(span.getAttribute('title')).toBe('Online');

    // Fire events.
    fireEvent.error(img);

    // Test assertions.
    expect(img.getAttribute('src')?.startsWith('data:image/gif')).toBe(true);
  });
});
