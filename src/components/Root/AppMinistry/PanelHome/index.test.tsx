import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import PanelHome from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppMinistry/PanelHome', (): void => {
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
    const component = () => <PanelHome {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const viewMoreButton = parent.querySelector('h3 + button') as HTMLElement;
    const headingList = parent.querySelectorAll('h3');
    const iframe = parent.querySelector('h3 + iframe');
    const pList = parent.querySelectorAll('p');

    // Test assertions.
    expect(viewMoreButton.textContent).toBe('View more');
    expect(headingList[0].textContent).toBe('Latest message');
    expect(headingList[1].textContent).toBe('About us');
    expect(headingList[2].textContent).toBe('Upcoming events');
    expect(iframe).toBeTruthy();
    expect(pList.length).toBeTruthy();

    // Fire events.
    fireEvent.click(viewMoreButton);

    // Test assertions.
    expect(state.signalMinistryTab.get()).toBe(1);
  });
});
