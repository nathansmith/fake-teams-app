import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Search from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/TitleBar/Search', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      onSubmit: vi.fn(),
    };

    // Component.
    const component = () => <Search {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const form = document.querySelector('form') as HTMLElement;
    const label = form.querySelector('label') as HTMLElement;
    const input = form.querySelector('input') as HTMLInputElement;

    // Test assertions.
    expect(label.getAttribute('aria-label')).toBe('Search');
    expect(label.getAttribute('for')).toBe(input.id);
    expect(label.querySelector('svg')).toBeTruthy();

    expect(input.getAttribute('autocomplete')).toBe('off');
    expect(input.getAttribute('name')).toBe('search');
    expect(input.getAttribute('placeholder')).toBe('Search');
    expect(input.getAttribute('type')).toBe('text');

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
      search: event.target.value,
    });
  });
});
