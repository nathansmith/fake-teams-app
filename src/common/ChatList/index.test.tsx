import { conversation } from '~/data/intro';
import { render } from 'solid-js/web';
import ChatList from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/ChatList', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      list: conversation.chatList,
    };

    // Component.
    const component = () => <ChatList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;

    // Test assertions.
    expect(parent.childNodes.length).toBe(props.list.length);
  });
});
