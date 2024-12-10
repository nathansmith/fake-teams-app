import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Button from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Layout/Nav/Button', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      disabled: false,
      isActive: true,
      onClick: vi.fn(),
      title: 'EXAMPLE_TITLE',
    };

    // Component.
    const component = () => <Button {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const button = document.querySelector('button') as HTMLButtonElement;

    // Test assertions.
    expect(button.disabled).toBe(props.disabled);
    expect(button.getAttribute('aria-label')).toBe(props.title);
    expect(button.getAttribute('aria-pressed')).toBe(String(props.isActive));
    expect(button.getAttribute('title')).toBe(props.title);
    expect(button.getAttribute('type')).toBe('button');

    // Fire events.
    fireEvent.click(button);

    // Test assertions.
    expect(props.onClick).toBeCalled();
  });
});
