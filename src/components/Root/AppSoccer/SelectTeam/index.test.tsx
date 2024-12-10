import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import optionList from './optionList.json';
import SelectTeam from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/AppSoccer/SelectTeam', (): void => {
  // ============
  // Before each.
  // ============

  beforeEach((): void => {
    // Update.
    state.signalSoccerId.set(optionList[0].value);
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <SelectTeam {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const label = document.querySelector('label') as HTMLElement;
    const span = label.querySelector('span') as HTMLElement;
    const select = label.querySelector('select') as HTMLSelectElement;

    // Test assertions.
    expect(label.getAttribute('for')).toBe(select.getAttribute('id'));
    expect(span.getAttribute('aria-label')).toBe('Select team');
    expect(span.getAttribute('title')).toBe('Select team');

    expect(select.value).toBe(state.signalSoccerId.get());
    expect(select.querySelectorAll('option')).toHaveLength(optionList.length);

    // Dummy events.
    const event = {
      target: {
        value: optionList[1].value,
      },
    };

    // Fire events.
    fireEvent.change(select, event);

    // Test assertions.
    expect(state.signalSoccerId.get()).toBe(optionList[1].value);
  });
});
