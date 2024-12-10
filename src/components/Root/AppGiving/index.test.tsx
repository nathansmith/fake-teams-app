import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import AppGiving from './';
import nonprofitList from '~/data/giving/nonprofitList.json';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppGiving', (): void => {
  // =======
  // Before.
  // =======

  beforeEach((): void => {
    // Update.
    state.signalGivingId.set('');
    state.signalGivingTab.set(0);
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <AppGiving {...props} />;

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
    expect(h2.textContent).toBe('Giving App');
    expect(tabList.length === 3).toBe(tabPanelList.length === 3);

    // Fire events.
    fireEvent.click(tabList[1]);

    // Test assertions.
    expect(state.signalGivingTab.get()).toBe(1);
  });

  // ==============================
  // Test "donation form" scenario.
  // ==============================

  test('handles "donation form" scenario', (): void => {
    // Update.
    state.signalGivingId.set(nonprofitList[0].id);

    // Dummy props.
    const props = {};

    // Component.
    const component = () => <AppGiving {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const section = document.querySelector('section') as HTMLElement;
    const tabPanelList = section.querySelectorAll('[role="tabpanel"]');

    const header = section.querySelector('header') as HTMLElement;
    const tabList = header.querySelectorAll('[role="tab"]');
    const form = section.querySelector('form');

    // Test assertions.
    expect(form).toBeTruthy();
    expect(tabList.length === 0).toBe(tabPanelList.length === 0);
  });
});
