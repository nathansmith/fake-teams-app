import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import { conversation } from '~/data/intro';
import Content from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppChat/Content', (): void => {
  // =======
  // Before.
  // =======

  beforeEach((): void => {
    // Update.
    state.signalConversationId.set('intro');
    state.signalConversationTab.set(0);
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <Content {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const section = document.querySelector('section') as HTMLElement;
    const tabPanelList = section.querySelectorAll('[role="tabpanel"]');

    const header = section.querySelector('header') as HTMLElement;
    const h2 = header.querySelector('h2') as HTMLElement;
    const buttonList = header.querySelectorAll(':scope > div:not([role]) > button');
    const tabList = header.querySelectorAll('[role="tab"]');

    const footer = section.querySelector('footer') as HTMLElement;
    const footerForm = footer.querySelector('form') as HTMLElement;

    // Test assertions.
    expect(buttonList).toHaveLength(3);
    expect(footerForm).toBeTruthy();
    expect(h2.textContent).toBe(conversation.title);
    expect(tabList.length === 3).toBe(tabPanelList.length === 3);
    expect(tabPanelList[2].querySelector('b')?.textContent).toBe('UNT design faculty');

    // Fire events.
    fireEvent.click(tabList[1]);

    // Test assertions.
    expect(state.signalConversationTab.get()).toBe(1);
  });

  // ==========================
  // Test "not intro" scenario.
  // ==========================

  test('handles "not intro" scenario', (): void => {
    // Update.
    state.signalConversationId.set('fusion-08b');

    // Dummy props.
    const props = {};

    // Component.
    const component = () => <Content {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const section = document.querySelector('section') as HTMLElement;
    const tabPanelList = section.querySelectorAll('[role="tabpanel"]');

    // Test assertions.
    expect(tabPanelList[2].querySelector('b')?.textContent).not.toBe('UNT design faculty');
  });
});
