import { render } from 'solid-js/web';
import PanelRecruiting from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/AppSoccer/PanelRecruiting', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelRecruiting {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const h3List = parent.querySelectorAll('h3');
    const linkList = parent.querySelectorAll('a');
    const pList = parent.querySelectorAll('p');
    const tableList = parent.querySelectorAll('table');
    const ulList = parent.querySelectorAll('ul');

    // Test assertions.
    expect(h3List.length).toBeTruthy();
    expect(linkList.length).toBeTruthy();
    expect(pList.length).toBeTruthy();
    expect(tableList.length).toBeTruthy();
    expect(ulList.length).toBeTruthy();
  });
});
