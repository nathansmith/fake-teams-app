import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import Main from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/Layout/Main', (): void => {
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
    const props = {
      children: 'EXAMPLE_CHILDREN',
    };

    // Component.
    const component = () => <Main {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const main = document.querySelector('main') as HTMLElement;

    // Test assertions.
    expect(main.textContent).toBe(props.children);

    // Fire events.
    fireEvent.pointerDown(main);

    // Test assertions.
    expect(state.signalChatSidebarActive.get()).toBe(false);
  });
});
