import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import AppMinistry from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppMinistry', (): void => {
  // =======
  // Before.
  // =======

  beforeEach((): void => {
    // Update.
    state.signalMinistryTab.set(0);
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <AppMinistry {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const section = document.querySelector('section') as HTMLElement;
    const tabPanelList = section.querySelectorAll('[role="tabpanel"]');

    const header = section.querySelector('header') as HTMLElement;
    const h2 = header.querySelector('h2') as HTMLElement;
    const tabList = header.querySelectorAll('[role="tab"]');
    const form = section.querySelector('form');

    // Test assertions.
    expect(form).toBeFalsy();
    expect(h2.textContent).toBe('Ministry App');
    expect(tabList.length === 4).toBe(tabPanelList.length === 4);

    // Fire events.
    fireEvent.click(tabList[1]);

    // Test assertions.
    expect(state.signalMinistryTab.get()).toBe(1);
  });
});
