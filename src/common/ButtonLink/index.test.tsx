import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import ButtonLink from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/ButtonLink', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      children: 'EXAMPLE_CHILDREN',
      onClick: vi.fn(),
    };

    // Component.
    const component = () => <ButtonLink {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const button = document.querySelector('button') as HTMLButtonElement;

    // Test assertions.
    expect(button.getAttribute('type')).toBe('button');
    expect(button.textContent).toBe(props.children);

    // Fire events.
    fireEvent.click(button);

    // Test assertions.
    expect(props.onClick).toBeCalled();

    // TODO: REMOVE THIS.
    console.log(button.outerHTML);
  });
});
