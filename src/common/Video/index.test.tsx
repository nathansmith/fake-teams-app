import { render } from 'solid-js/web';
import Video from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Video', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      startTime: 5,
      mute: true,
      title: 'EXAMPLE_TITLE',
      video: 'EXAMPLE_VIDEO',
    };

    // Component.
    const component = () => <Video {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const figure = document.querySelector('figure');
    const iframe = document.querySelector('iframe') as HTMLElement;

    // Test assertions.
    expect(figure).toBeFalsy();
    expect(iframe.getAttribute('allow')).toBeTruthy();
    expect(iframe.getAttribute('allowfullscreen')).not.toBeNull();
    expect(iframe.getAttribute('referrerpolicy')).toBe('strict-origin-when-cross-origin');
    expect(iframe.getAttribute('src')).toContain('mute=1');
    expect(iframe.getAttribute('src')).toContain('start=5');
    expect(iframe.getAttribute('src')).toContain(props.video);
    expect(iframe.getAttribute('title')).toBe(props.title);
  });

  // =========================
  // Test "no video" scenario.
  // =========================

  test('handles "no video" scenario', (): void => {
    // Dummy props.
    const props = {
      startTime: 5,
      mute: true,
      title: 'EXAMPLE_TITLE',
      video: '',
    };

    // Component.
    const component = () => <Video {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const figure = document.querySelector('figure') as HTMLElement;
    const figcaption = figure.querySelector('figcaption') as HTMLElement;
    const figureDiv = figure.querySelector('div') as HTMLElement;
    const iframe = document.querySelector('iframe');

    // Test assertions.
    expect(iframe).toBeFalsy();
    expect(figcaption.getAttribute('title')).toBe(props.title);
    expect(figcaption.textContent).toBe(props.title);
    expect(figureDiv.textContent).toBe('No video yet');
  });
});
