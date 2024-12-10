import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import ButtonIcon from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/ButtonIcon', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
      disabled: false,
      icon: <span />,
      onClick: vi.fn(),
      title: 'EXAMPLE_TITLE',
      type: 'submit' as const,
    };

    // Component.
    const component = () => <ButtonIcon {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const button = document.querySelector('button') as HTMLButtonElement;
    const span = document.querySelector('span');

    // Test assertions.
    expect(button.disabled).toBe(props.disabled);
    expect(button.getAttribute('aria-label')).toBe(props.title);
    expect(button.getAttribute('title')).toBe(props.title);
    expect(button.getAttribute('type')).toBe(props.type);
    expect(span).toBeTruthy();

    // Fire events.
    fireEvent.click(button);

    // Test assertions.
    expect(props.onClick).toBeCalled();
  });
});
