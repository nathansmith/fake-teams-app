import { render } from 'solid-js/web';
import ScrollVertical from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/ScrollVertical', (): void => {
  // ==========
  // Set later.
  // ==========

  let dispose: () => void;

  // ======
  // After.
  // ======

  afterEach((): void => {
    // Fire `onCleanup`.
    dispose();
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      ariaLabelledby: 'EXAMPLE_ARIA_LABELLED_BY',
      children: 'EXAMPLE_CHILDREN',
      id: 'EXAMPLE_ID',
      isScrollBottom: true,
      role: 'tabpanel' as const,
    };

    // Component.
    const component = () => <ScrollVertical {...props} />;

    // Render.
    dispose = render(component, document.body);

    // Get elements.
    const divOuter = document.querySelector('div') as HTMLElement;
    const divInner = divOuter.querySelector('div') as HTMLElement;

    // Test assertions.
    expect(divOuter.getAttribute('aria-labelledby')).toBe(props.ariaLabelledby);
    expect(divOuter.getAttribute('id')).toBe(props.id);
    expect(divOuter.getAttribute('role')).toBe(props.role);
    expect(divInner.tabIndex).toBe(0);
    expect(divInner.textContent).toBe(props.children);
  });
});
