import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Compose from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Compose', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      onSubmit: vi.fn(),
    };

    // Component.
    const component = () => <Compose {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const form = document.querySelector('form') as HTMLElement;
    const input = form.querySelector('input') as HTMLElement;

    const buttonDiv = form.querySelector('div') as HTMLElement;
    const buttonList = buttonDiv.querySelectorAll('button');
    const span = buttonDiv.querySelector('span') as HTMLElement;

    // Test assertions.
    expect(input.getAttribute('autocomplete')).toBe('off');
    expect(input.getAttribute('name')).toBe('compose');
    expect(input.getAttribute('placeholder')).toBeTruthy();
    expect(input.getAttribute('type')).toBe('text');

    expect(buttonList.length).toBe(4);
    expect(span.getAttribute('role')).toBe('presentation');

    // Dummy events.
    const event = {
      target: {
        value: 'EXAMPLE_VALUE',
      },
    };

    // Fire events.
    fireEvent.input(input, event);
    fireEvent.submit(form);

    // Test assertions.
    expect(props.onSubmit).toBeCalledWith({
      compose: event.target.value,
    });
  });
});
