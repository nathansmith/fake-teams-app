import { render } from 'solid-js/web';
import collegeList from '~/data/recruiting/collegeList.json';
import CollegeList from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/AppSoccer/PanelRecruiting/CollegeList', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <CollegeList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const divList = parent.querySelectorAll(':scope > div');
    const hrList = parent.querySelectorAll(':scope > hr');

    // Test assertions.
    expect(divList).toHaveLength(collegeList.length);
    expect(divList).toHaveLength(hrList.length);
  });
});
