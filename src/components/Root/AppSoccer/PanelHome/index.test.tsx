import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import PanelHome from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/AppSoccer/PanelHome', (): void => {
  // ============
  // Before each.
  // ============

  beforeEach((): void => {
    // Update.
    state.signalSoccerTab.set(0);
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
    const h4List = parent.querySelectorAll('h4');
    const tableList = parent.querySelectorAll('table');
    const viewMoreButton = parent.querySelector('h3 + button') as HTMLElement;

    // Test assertions.
    expect(h4List.length).toBeTruthy();
    expect(tableList.length).toBeTruthy();
    expect(viewMoreButton.textContent).toBe('View more');

    // Fire events.
    fireEvent.click(viewMoreButton);

    // Test assertions.
    expect(state.signalSoccerTab.get()).toBe(1);
  });
});
