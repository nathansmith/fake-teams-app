import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import PanelHome from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppGiving/PanelHome', (): void => {
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
    const component = () => <PanelHome {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const donateButtonList = parent.querySelectorAll('figcaption > button');
    const pList = parent.querySelectorAll('p');

    const headingList = parent.querySelectorAll('h3');
    const viewMoreButton = parent.querySelector('h3 + button') as HTMLElement;

    // Test assertions.
    expect(headingList[0].textContent).toBe('Impactful opportunity awaits');
    expect(headingList[1].textContent).toBe('Featured causes');

    expect(donateButtonList[0].textContent).toBe('Donate');
    expect(pList.length).toBeTruthy();

    // Fire events.
    fireEvent.click(donateButtonList[0]);
    fireEvent.click(viewMoreButton);

    // Test assertions.
    expect(state.signalGivingId.get()).toBeTruthy();
    expect(state.signalGivingTab.get()).toBe(1);
  });
});
