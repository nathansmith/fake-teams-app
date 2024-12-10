import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import RadioList from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/RadioList', (): void => {
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
      name: 'EXAMPLE_NAME',
      onChange: vi.fn(),
      optionList: [
        { text: EXAMPLE_TEXT_1, value: EXAMPLE_VALUE_1 },
        { text: EXAMPLE_TEXT_2, value: EXAMPLE_VALUE_2 },
      ],
      value: EXAMPLE_VALUE_1,
    };

    // Component.
    const component = () => <RadioList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.body.querySelector('ul') as HTMLElement;
    const inputList = parent.querySelectorAll('input');

    // Test assertions.
    expect(inputList[0].checked).toBe(true);
    expect(inputList[0].getAttribute('name')).toBe(props.name);
    expect(inputList[0].getAttribute('value')).toBe(props.optionList[0].value);

    expect(inputList[1].checked).toBe(false);
    expect(inputList[1].getAttribute('name')).toBe(props.name);
    expect(inputList[1].getAttribute('value')).toBe(props.optionList[1].value);

    // Fire events.
    fireEvent.change(inputList[1]);

    // Test assertions.
    expect(props.onChange).toBeCalledWith(props.optionList[1].value);
  });
});
