import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { storage } from '~/utils';
import ErrorPage from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/ErrorPage', (): void => {
  // ==========
  // Constants.
  // ==========

  const KEY_LOCAL = 'KEY_LOCAL';
  const KEY_SESSION = 'KEY_SESSION';

  const VALUE_LOCAL = 'VALUE_LOCAL';
  const VALUE_SESSION = 'VALUE_SESSION';

  // =========
  // Override.
  // =========

  Object.defineProperty(globalThis, 'location', {
    value: {
      reload: vi.fn(),
    },
    writable: true,
  });

  // =======
  // Before.
  // =======

  beforeEach((): void => {
    // Clear storage.
    storage.local.set(KEY_LOCAL, VALUE_LOCAL);
    storage.session.set(KEY_SESSION, VALUE_SESSION);

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
    const component = () => <ErrorPage {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const LOADING_SPINNER = document.getElementById('LOADING_SPINNER') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    const button = main.querySelector('button') as HTMLElement;
    const pList = main.querySelectorAll('p');

    // Test assertions.
    expect(LOADING_SPINNER.style.display).toBe('none');
    expect(storage.local.get(KEY_LOCAL)).toBeFalsy();
    expect(storage.session.get(KEY_SESSION)).toBeFalsy();

    expect(pList[0].textContent).toBe('Sorry, something went wrong.');
    expect(pList[1].textContent).toBe('Try refreshing the page.');
    expect(button.textContent).toBe('Refresh');

    // Fire events.
    fireEvent.click(button);

    // Test assertions.
    expect(globalThis.location.reload).toBeCalled();
  });
});
