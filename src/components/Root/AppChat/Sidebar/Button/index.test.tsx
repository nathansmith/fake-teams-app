import { fireEvent } from '@testing-library/dom';
import { MOCK_DATE_STRING } from '~/__mocks__';
import { render } from 'solid-js/web';
import Button from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppChat/Sidebar/Button', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      date: MOCK_DATE_STRING,
      disabled: false,
      image: '/path/to/image.webp',
      isActive: true,
      name: 'EXAMPLE_NAME',
      onClick: vi.fn(),
      status: 'online',
      text: 'EXAMPLE_TEXT',
    };

    // Component.
    const component = () => <Button {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const button = document.querySelector('button') as HTMLButtonElement;
    const avatar = button.querySelector(':scope > figure > img') as HTMLElement;

    // Test assertions.
    expect(avatar.getAttribute('alt')).toBe(props.name);
    expect(avatar.getAttribute('src')).toBe(props.image);

    expect(button.getAttribute('aria-pressed')).toBe(String(props.isActive));
    expect(button.getAttribute('type')).toBe('button');
    expect(button.disabled).toBe(props.disabled);

    expect(button.querySelector(':scope > span:nth-of-type(1)')?.textContent).toBe(props.name);
    expect(button.querySelector(':scope > span:nth-of-type(2)')?.textContent).toBe('11/9');
    expect(button.querySelector(':scope > span:nth-of-type(3)')?.textContent).toBe(props.text);

    // Fire events.
    fireEvent.click(button);

    // Test assertions.
    expect(props.onClick).toBeCalled();
  });
});
