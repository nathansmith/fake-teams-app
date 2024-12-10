import { render } from 'solid-js/web';
import HeroImage from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/HeroImage', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      alt: 'EXAMPLE_ALT',
      image: '/path/to/image.webp',
    };

    // Component.
    const component = () => <HeroImage {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const img = document.querySelector('img') as HTMLElement;

    // Test assertions.
    expect(img.getAttribute('alt')).toBe(props.alt);
    expect(img.getAttribute('src')).toBe(props.image);
  });
});
