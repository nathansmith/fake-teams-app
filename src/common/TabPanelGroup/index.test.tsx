import { render } from 'solid-js/web';
import TabPanel from '~/common/TabPanel';
import TabPanelGroup from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/TabPanelGroup', (): void => {
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
      activeIndex: 0,
      id: 'EXAMPLE_ID',
    };

    // Component.
    const component = () => (
      <TabPanelGroup {...props}>
        <TabPanel
          //
          isScroll={false}
          isScrollBottom={false}
        >
          <p>PANEL 1</p>
        </TabPanel>

        <TabPanel
          //
          isScroll={true}
          isScrollBottom={false}
        >
          <p>PANEL 2</p>
        </TabPanel>

        <TabPanel
          //
          isScroll={false}
          isScrollBottom={true}
        >
          <p>PANEL 3</p>
        </TabPanel>
      </TabPanelGroup>
    );

    // Render.
    dispose = render(component, document.body);

    // Get elements.
    const style = document.head.querySelector('style') as HTMLElement;
    const divList: NodeListOf<HTMLElement> = document.body.querySelectorAll(':scope > div');

    // Test assertions.
    expect(style).toBeTruthy();
    expect(style.getAttribute('id')).toBeTruthy();
    expect(style.innerHTML).toContain('display: block');
    expect(divList).toHaveLength(3);

    // Loop through.
    divList.forEach((div): void => {
      // Test assertions.
      expect(div.getAttribute('aria-labelledby')).toBeTruthy();
      expect(div.getAttribute('id')).toBeTruthy();
      expect(div.getAttribute('role')).toBe('tabpanel');
      expect([0, -1]).toContain(div.tabIndex);
    });
  });
});
