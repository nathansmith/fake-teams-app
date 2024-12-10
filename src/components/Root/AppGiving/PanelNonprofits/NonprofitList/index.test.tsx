import { render } from 'solid-js/web';
import { state } from '~/state';
import nonprofitList from '~/data/giving/nonprofitList.json';
import NonprofitList from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppGiving/PanelNonprofits/NonprofitList', (): void => {
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
    const component = () => <NonprofitList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const divList = parent.querySelectorAll(':scope > div');
    const hrList = parent.querySelectorAll(':scope > hr');

    // Test assertions.
    expect(divList).toHaveLength(nonprofitList.length);
    expect(divList).toHaveLength(hrList.length);
  });
});
