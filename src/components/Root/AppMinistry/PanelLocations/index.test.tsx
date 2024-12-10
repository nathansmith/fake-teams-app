import { render } from 'solid-js/web';
import campusList from '~/data/ministry/campusList.json';
import PanelLocations from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppMinistry/PanelLocations', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelLocations {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const h3 = parent.querySelector('h3') as HTMLElement;
    const tableList = parent.querySelectorAll('table');

    // Test assertions.
    expect(h3.textContent).toBe('Campuses & Service times');
    expect(tableList).toHaveLength(campusList.length);
  });
});
