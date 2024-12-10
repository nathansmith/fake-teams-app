import { MOCK_DATE_STRING } from '~/__mocks__';
import { render } from 'solid-js/web';
import PanelHistory from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppGiving/PanelHistory', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelHistory {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const headingList = parent.querySelectorAll('h3');
    const pList = parent.querySelectorAll('p');
    const tableList = parent.querySelectorAll('div > table');

    // Test assertions.
    expect(headingList.length).toBeTruthy();
    expect(pList.length).toBeTruthy();
    expect(tableList.length).toBeTruthy();
  });
});
