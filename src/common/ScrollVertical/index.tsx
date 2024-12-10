/*
eslint

{
  'jsx-a11y/no-noninteractive-tabindex': 'off',
}
*/

import { css } from 'styled-system/css';
import { onCleanup, onMount } from 'solid-js';
import throttle from 'lodash.throttle';
import type { ParentComponent } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface IScrollVertical {
  ariaLabelledby?: string;
  cssRaw?: SystemStyleObject;
  id?: string;
  isScrollBottom?: boolean;
  role?: 'tabpanel';
}

// ==========
// Component.
// ==========

const ScrollVertical: ParentComponent<IScrollVertical> = (props) => {
  // ==========
  // Constants.
  // ==========

  const intersectionObserver = new IntersectionObserver((intersectionList): void => {
    // Loop through.
    for (const intersection of intersectionList) {
      // Is intersecting: YES.
      if (intersection.isIntersecting) {
        // Scroll.
        setScrollTop(props.isScrollBottom);
      }
    }
  });

  const mutationObserver = new MutationObserver((mutationList): void => {
    // Loop through.
    for (const mutation of mutationList) {
      // Children diff: YES.
      if (mutation.type === 'childList') {
        // Scroll.
        setScrollTop(props.isScrollBottom);
      }
    }
  });

  // ==========
  // Set later.
  // ==========

  let refScroll: HTMLElement;

  // =======================
  // Helper: set scroll top.
  // =======================

  const setScrollTop = throttle((isScrollBottom: typeof props.isScrollBottom): void => {
    // Clear queue.
    setScrollTop.cancel();

    // Slight delay.
    globalThis.requestAnimationFrame((): void => {
      // Is visible: YES.
      if (globalThis.getComputedStyle(refScroll).height !== 'auto') {
        // Update.
        refScroll.scrollTop = isScrollBottom ? refScroll.scrollHeight : 0;
      }
    });

    // Max interval.
  }, 250);

  // ================
  // Component mount.
  // ================

  onMount((): void => {
    // Observe.
    intersectionObserver.observe(refScroll);

    // Observe.
    mutationObserver.observe(refScroll, {
      childList: true,
      subtree: true,
    });
  });

  // ==================
  // Component unmount.
  // ==================

  onCleanup((): void => {
    // Disconnect.
    intersectionObserver.disconnect();
    mutationObserver.disconnect();
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      aria-labelledby={props.ariaLabelledby}
      class={css(
        {
          flex: '1',
          position: 'relative',
        },
        props.cssRaw
      )}
      id={props.id}
      role={props.role}
    >
      <div
        class={css({
          overflowX: 'hidden',
          overflowY: 'auto',
          paddingTop: '{spacing.5}',
          paddingLeft: 'calc({spacing.5} - {spacing.scrollbar})',
          paddingRight: 'calc({spacing.5} - {spacing.scrollbar})',
          paddingBottom: '{spacing.5}',
          scrollbarGutter: 'stable both-edges',

          position: 'absolute',
          top: '0',
          right: '0',
          left: '0',
          bottom: '0',
        })}
        ref={(el) => (refScroll = el)}
        tabIndex={0}
      >
        {props.children}
      </div>
    </div>
  );
};

// Export.
export default ScrollVertical;
