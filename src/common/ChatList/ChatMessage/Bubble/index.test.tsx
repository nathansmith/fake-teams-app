import { render } from 'solid-js/web';
import Bubble from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/ChatList/ChatMessage/Bubble', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      reactions: [
        {
          count: 1,
          emoji: '👍',
        },
      ],
      text: 'EXAMPLE_TEXT',
    };

    // Component.
    const component = () => <Bubble {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const divText = parent.querySelector('div') as HTMLElement;
    const buttonList = parent.querySelectorAll('button');

    // Test assertions.
    expect(divText.textContent).toContain(props.text);
    expect(buttonList.length).toBe(props.reactions.length);
  });
});
