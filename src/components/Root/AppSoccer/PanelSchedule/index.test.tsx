import { render } from 'solid-js/web';
import PanelSchedule from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/AppSoccer/PanelSchedule', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelSchedule {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const h3 = parent.querySelector('h3') as HTMLElement;
    const label = parent.querySelector('label') as HTMLElement;
    const input = label.querySelector('input') as HTMLElement;
    const span = label.querySelector('span') as HTMLElement;
    const tableList = parent.querySelectorAll('table');

    // Test assertions.
    expect(h3.textContent).toBe('Fall 2024');
    expect(label.getAttribute('for')).toBe(input.getAttribute('id'));
    expect(input.getAttribute('type')).toBe('checkbox');
    expect(span.textContent).toBe('Show games only');
    expect(tableList.length).toBeTruthy();
  });
});
