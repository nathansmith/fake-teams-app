import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Nav from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Layout/Nav', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <Nav {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const nav = document.querySelector('nav') as HTMLElement;
    const buttonListAll = Array.from(nav.querySelectorAll('button'));
    const buttonListEnabled = buttonListAll.filter((button) => !button.disabled);
    const buttonListDisabled = buttonListAll.filter((button) => button.disabled);

    // Test assertions.
    expect(buttonListEnabled).toHaveLength(4);
    expect(buttonListDisabled).toHaveLength(4);

    expect(buttonListEnabled[0].getAttribute('title')).toBe('Chat');
    expect(buttonListEnabled[1].getAttribute('title')).toBe('Soccer App');
    expect(buttonListEnabled[2].getAttribute('title')).toBe('Giving App');
    expect(buttonListEnabled[3].getAttribute('title')).toBe('Ministry App');

    expect(buttonListDisabled[0].getAttribute('title')).toBe('Activity');
    expect(buttonListDisabled[1].getAttribute('title')).toBe('Meet');
    expect(buttonListDisabled[2].getAttribute('title')).toBe('Communities');
    expect(buttonListDisabled[3].getAttribute('title')).toBe('Calendar');

    // Loop through.
    for (const button of buttonListAll) {
      // Test assertions.
      expect(button.querySelector('svg')).toBeTruthy();

      // Is disabled: NO.
      if (!button.disabled) {
        // Fire events.
        fireEvent.click(button);

        // Test assertions.
        expect(button.getAttribute('aria-pressed')).toBe(String(true));
      }
    }
  });
});
