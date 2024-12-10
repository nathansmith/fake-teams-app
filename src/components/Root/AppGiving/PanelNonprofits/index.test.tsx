import { render } from 'solid-js/web';
import { state } from '~/state';
import PanelNonprofits from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppGiving/PanelNonprofits', (): void => {
  beforeEach((): void => {
    // Update.
    state.signalGivingId.set('');
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelNonprofits {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const h3 = parent.querySelector('h3') as HTMLElement;
    const divList = parent.querySelectorAll(':scope > div');

    // Test assertions.
    expect(h3.textContent).toBe('Charities & Nonprofits');
    expect(divList.length).toBeTruthy();
  });
});
