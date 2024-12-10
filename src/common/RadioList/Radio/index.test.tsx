import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Radio from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Radio', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      checked: true,
      name: 'EXAMPLE_NAME',
      onChange: vi.fn(),
      text: 'EXAMPLE_TEXT',
      value: 'EXAMPLE_VALUE',
    };

    // Component.
    const component = () => <Radio {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const label = document.querySelector('label') as HTMLElement;
    const input = label.querySelector('input') as HTMLInputElement;
    const span = label.querySelector('span') as HTMLElement;

    // Test assertions.
    expect(label.getAttribute('for')).toBe(input.id);
    expect(input.getAttribute('name')).toBe(props.name);
    expect(input.getAttribute('type')).toBe('radio');
    expect(input.checked).toBe(props.checked);
    expect(input.value).toBe(props.value);
    expect(span.textContent).toBe(props.text);

    // Dummy events.
    const event = { target: { value: 'EXAMPLE_VALUE' } };

    // Fire events.
    fireEvent.change(input, event);

    // Test assertions.
    expect(props.onChange).toBeCalledWith(event.target.value);
  });
});
