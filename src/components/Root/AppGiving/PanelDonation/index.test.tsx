import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import nonprofitList from '~/data/giving/nonprofitList.json';
import PanelDonation from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/PanelDonation', (): void => {
  // =======
  // Before.
  // =======

  beforeEach((): void => {
    // Update.
    state.signalGivingId.set(nonprofitList[0].id);
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelDonation {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const backButton = document.querySelector('div:only-child > div > button') as HTMLElement;
    const form = document.querySelector('div:only-child > div > form') as HTMLElement;

    const h3 = document.querySelector('div:only-child > div > h3') as HTMLElement;
    const headingLink = document.querySelector('a') as HTMLElement;

    // Test assertions.
    expect(backButton.getAttribute('title')).toBe('Back');
    expect(h3.textContent).toContain('Donating to:');
    expect(h3.textContent).toContain(nonprofitList[0].name);
    expect(headingLink.getAttribute('href')).toBe(nonprofitList[0].url);
    expect(headingLink.getAttribute('title')).toBe(nonprofitList[0].url);
    expect(form).toBeTruthy();

    // Fire events.
    fireEvent.click(backButton);

    // Test assertions.
    expect(state.signalGivingId.get()).toBe('');
  });
});
