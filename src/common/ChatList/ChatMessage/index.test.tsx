import { conversation } from '~/data/intro';
import { render } from 'solid-js/web';
import ChatMessage from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/ChatList/ChatMessage', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      ...conversation.chatList[0],
      isSelf: false,
    };

    // Component.
    const component = () => <ChatMessage {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const img = parent.querySelector('img') as HTMLImageElement;
    const divName = parent.querySelector(':scope > div:nth-of-type(1)') as HTMLElement;
    const divTextList = parent.querySelector(':scope > div:nth-of-type(2)') as HTMLElement;

    // Test assertions.
    expect(img.getAttribute('alt')).toBe(props.name);
    expect(img.getAttribute('src')).toBe(props.image);
    expect(divName.textContent).toContain(props.name);
    expect(divTextList.childNodes.length).toBe(props.textList.length);
  });
});
