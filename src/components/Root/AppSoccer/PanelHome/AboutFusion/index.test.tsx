import { render } from 'solid-js/web';
import { state } from '~/state';
import AboutFusion from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/AppSoccer/AboutFusion', (): void => {
  // ============
  // Before each.
  // ============

  beforeEach((): void => {
    // Update.
    state.signalSoccerId.set('fusion-08b');
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <AboutFusion {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const h3List = parent.querySelectorAll('h3');
    const imgList = parent.querySelectorAll('img');
    const pList = parent.querySelectorAll('p');

    // Test assertions.
    expect(h3List.length).toBeTruthy();
    expect(imgList.length).toBeTruthy();
    expect(pList.length).toBeTruthy();

    // Update.
    state.signalSoccerId.set('fusion-10b');
  });
});
