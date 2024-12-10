import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Reaction from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/ChatList/ChatMessage/Bubble/Reaction', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      count: 1,
      emoji: '👍',
    };

    // Component.
    const component = () => <Reaction {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const button = document.querySelector('button') as HTMLElement;
    let span = button.querySelector('span');

    // Test assertions.
    expect(button.textContent).toBe(props.emoji);
    expect(span).toBeFalsy();

    // Fire events.
    fireEvent.click(button);

    // Get elements.
    span = button.querySelector('span') as HTMLElement;

    // Test assertions.
    expect(span.textContent).toBe(String(props.count + 1));

    // Fire events.
    fireEvent.click(button);

    // Get elements.
    span = button.querySelector('span');

    // Test assertions.
    expect(span).toBeFalsy();
  });
});
