import { render } from 'solid-js/web';
import TeamsIcon from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/TitleBar/TeamsIcon', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      title: 'EXAMPLE_TITLE',
    };

    // Component.
    const component = () => <TeamsIcon {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const h1 = document.querySelector('h1') as HTMLElement;

    // Test assertions.
    expect(h1.getAttribute('aria-label')).toBe(props.title);
    expect(h1.getAttribute('title')).toBe(props.title);
    expect(h1.querySelector('svg')).toBeTruthy();
  });
});
