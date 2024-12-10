import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Button from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Button', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
      disabled: false,
      onClick: vi.fn(),
      type: 'submit' as const,
    };

    // Component.
    const component = () => <Button {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const button = document.querySelector('button') as HTMLButtonElement;

    // Test assertions.
    expect(button.disabled).toBe(props.disabled);
    expect(button.getAttribute('type')).toBe(props.type);
    expect(button.textContent).toBe(props.children);

    // Fire events.
    fireEvent.click(button);

    // Test assertions.
    expect(props.onClick).toBeCalled();
  });
});
