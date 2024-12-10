import { render } from 'solid-js/web';
import { state } from '~/state';
import Root from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root', (): void => {
  // =======
  // Before.
  // =======

  beforeEach((): void => {
    // Dummy content.
    document.body.innerHTML = `
      <div id="LOADING_SPINNER"></div>
    `;
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <Root {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const LOADING_SPINNER = document.getElementById('LOADING_SPINNER') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;

    // Test assertions.
    expect(LOADING_SPINNER.style.display).toBe('none');
    expect(main.querySelector(':scope > div')?.textContent).toBe('Loading');

    // Update.
    state.signalAppId.set('giving');
    state.signalAppId.set('ministry');
    state.signalAppId.set('soccer');
  });
});
