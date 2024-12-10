import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Image from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Image', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      alt: 'EXAMPLE_ALT',
      imagePosition: '0 0',
      src: '/path/to/image.webp',
    };

    // Component.
    const component = () => <Image {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const img = document.querySelector('img') as HTMLElement;

    // Test assertions.
    expect(img.getAttribute('alt')).toBe(props.alt);
    expect(img.getAttribute('loading')).toBe('lazy');
    expect(img.getAttribute('src')).toBe(props.src);
    expect(img.getAttribute('title')).toBe(props.alt);
    expect(img.style.objectPosition).toBe(props.imagePosition);

    // Fire events.
    fireEvent.error(img);

    // Test assertions.
    expect(img.getAttribute('src')?.startsWith('data:image/gif')).toBe(true);
  });
});
