import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Input from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Input', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      ariaLabel: 'EXAMPLE_ARIA_LABEL',
      id: 'EXAMPLE_ID',
      label: 'EXAMPLE_LABEL',
      max: 10,
      maxLength: 20,
      min: 1,
      name: 'EXAMPLE_NAME',
      onChange: vi.fn(),
      placeholder: 'EXAMPLE_PLACEHOLDER',
      required: true,
      type: 'number',
      value: '10',
    };

    // Component.
    const component = () => <Input {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.body.querySelector('div') as HTMLElement;
    const label = parent.querySelector('label') as HTMLElement;
    const abbr = label.querySelector('abbr') as HTMLElement;
    const input = parent.querySelector('input') as HTMLInputElement;

    // Test assertions.
    expect(label.getAttribute('for')).toBe(props.id);
    expect(label.textContent).toContain(props.label);

    expect(abbr.getAttribute('title')).toBe('Required');
    expect(abbr.textContent).toBe('*');

    expect(input.getAttribute('aria-label')).toBe(props.ariaLabel);
    expect(input.getAttribute('autocomplete')).toBe('off');
    expect(input.getAttribute('id')).toBe(props.id);
    expect(input.getAttribute('max')).toBe(String(props.max));
    expect(input.getAttribute('min')).toBe(String(props.min));
    expect(input.getAttribute('name')).toBe(props.name);
    expect(input.getAttribute('placeholder')).toBe(props.placeholder);
    expect(input.getAttribute('type')).toBe(props.type);

    expect(input.maxLength).toBe(props.maxLength);
    expect(input.value).toBe(props.value);

    // Fire events.
    fireEvent.change(input, {
      target: {
        value: '20',
      },
    });

    // Test assertions.
    expect(props.onChange).toBeCalledWith('20');
  });
});
