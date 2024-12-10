import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Select from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Select', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const EXAMPLE_TEXT_1 = 'EXAMPLE_TEXT_1';
    const EXAMPLE_TEXT_2 = 'EXAMPLE_TEXT_2';

    const EXAMPLE_VALUE_1 = 'EXAMPLE_VALUE_1';
    const EXAMPLE_VALUE_2 = 'EXAMPLE_VALUE_2';

    const props = {
      ariaLabel: 'EXAMPLE_ARIA_LABEL',
      id: 'EXAMPLE_ID',
      name: 'EXAMPLE_NAME',
      onChange: vi.fn(),
      optionList: [
        { text: EXAMPLE_TEXT_1, value: EXAMPLE_VALUE_1 },
        { text: EXAMPLE_TEXT_2, value: EXAMPLE_VALUE_2 },
      ],
      value: EXAMPLE_VALUE_1,
    };

    // Component.
    const component = () => <Select {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const select = document.querySelector('select') as HTMLSelectElement;

    // Test assertions.
    expect(select.getAttribute('aria-label')).toBe(props.ariaLabel);
    expect(select.getAttribute('id')).toBe(props.id);
    expect(select.getAttribute('name')).toBe(props.name);
    expect(select.value).toBe(props.value);

    // Dummy events.
    const event = {
      target: {
        value: EXAMPLE_VALUE_2,
      },
    };

    // Fire events.
    fireEvent.change(select, event);

    // Test assertions.
    expect(props.onChange).toBeCalledWith(event.target.value);
  });
});
