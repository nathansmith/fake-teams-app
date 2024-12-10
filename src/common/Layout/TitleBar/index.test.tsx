import { render } from 'solid-js/web';
import TitleBar from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/TitleBar', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <TitleBar {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const header = document.querySelector('header') as HTMLElement;
    const appIcon = header.querySelector('h1 > svg');
    const avatar = header.querySelector('figure > img');
    const buttonList = header.querySelectorAll(':scope > div > button');
    const input = header.querySelector('input');

    // Test assertions.
    expect(appIcon).toBeTruthy();
    expect(avatar).toBeTruthy();
    expect(input).toBeTruthy();

    expect(buttonList[0].getAttribute('title')).toBe('Back');
    expect(buttonList[1].getAttribute('title')).toBe('Forward');
    expect(buttonList[2].getAttribute('title')).toBe('Settings and more');
  });
});
