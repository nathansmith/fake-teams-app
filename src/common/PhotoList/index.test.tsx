import { render } from 'solid-js/web';
import PhotoList from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/PhotoList', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      list: [
        {
          alt: 'EXAMPLE_ALT',
          image: '/path/to/image.webp',
          url: 'https://example.com/',
        },
      ],
    };

    // Component.
    const component = () => <PhotoList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const link = parent.querySelector('a') as HTMLElement;
    const img = link.querySelector('img') as HTMLImageElement;

    // Test assertions.
    expect(link.getAttribute('href')).toBe(props.list[0].url);
    expect(img.getAttribute('alt')).toBe(props.list[0].alt);
    expect(img.getAttribute('src')).toBe(props.list[0].image);
  });

  // ==========================
  // Test "no images" scenario.
  // ==========================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      list: [],
    };

    // Component.
    const component = () => <PhotoList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const p = document.querySelector('p') as HTMLElement;

    // Test assertions.
    expect(p.textContent).toBe('No images yet.');
  });
});
