import { fakeContactList } from './fakeContactList';
import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import Sidebar from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppChat/Sidebar', (): void => {
  // =======
  // Before.
  // =======

  beforeEach((): void => {
    // Update.
    state.signalChatSidebarActive.set(true);
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <Sidebar {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const section = document.querySelector('section') as HTMLElement;
    const header = section.querySelector(':scope > header') as HTMLElement;
    const footer = section.querySelector(':scope > footer') as HTMLElement;

    const content = section.querySelector(':scope > div') as HTMLElement;
    const detailsList = content.querySelectorAll('details');

    // Test assertions.
    expect(header.querySelector('h2')?.textContent).toBe('Chat');
    expect(header.querySelectorAll('button')).toHaveLength(2);
    expect(footer.querySelector('button')?.textContent).toBe('Invite to Teams');

    expect(detailsList).toHaveLength(3);
    expect(detailsList[0].querySelectorAll('button')).toHaveLength(3);
    expect(detailsList[1].querySelectorAll('button')).toHaveLength(2);
    expect(detailsList[2].querySelectorAll('button')).toHaveLength(fakeContactList.length);

    // Dummy events.
    const eventTouchStart = {
      touches: [
        {
          clientX: 200,
          clientY: 200,
        },
      ],
    };

    const eventTouchEnd = {
      changedTouches: [
        {
          clientX: eventTouchStart.touches[0].clientX - 100,
          clientY: eventTouchStart.touches[0].clientY,
        },
      ],
    };

    // Invalid event.
    fireEvent.touchEnd(section, eventTouchEnd);

    // Fire events.
    fireEvent.touchStart(section, eventTouchStart);
    fireEvent.touchEnd(section, eventTouchEnd);

    // Test assertions.
    expect(state.signalChatSidebarActive.get()).toBe(false);
  });
});
