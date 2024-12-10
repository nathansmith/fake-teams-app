import { css } from 'styled-system/css';
import { For, onCleanup, onMount } from 'solid-js';
import { getChildren, getPanelId, getRandomId, getTabId } from '~/utils';
import ScrollVertical from '~/common/ScrollVertical';
import type { JSX, ParentComponent } from 'solid-js';

// ======
// Types.
// ======

export interface ITabPanelGroup {
  activeIndex?: number;
  id: string;
}

// ==========
// Component.
// ==========

const TabPanelGroup: ParentComponent<ITabPanelGroup> = (props) => {
  // ==========
  // Constants.
  // ==========

  const space = ' ';
  const spaceRegex = /\s+/g;
  const styleId = getRandomId();

  // ================
  // Component mount.
  // ================

  onMount((): void => {
    // Style exists: NO.
    if (!document.getElementById(styleId)) {
      // Create `style` tag.
      const styleTag = document.createElement('style');
      styleTag.id = styleId;

      // Set later.
      const styleList: string[] = [];

      // Loop through.
      getChildren(props).forEach((_, index) => {
        // Add style.
        styleList.push(`
          :has(#${getTabId(props.id, index)}[aria-selected="true"]) #${getPanelId(props.id, index)} {
            display: block;
          }
        `);
      });

      // Insert string.
      styleTag.innerHTML = styleList.join(space).trim().replace(spaceRegex, space);

      // Append `style` tag.
      document.head.appendChild(styleTag);
    }
  });

  // ==================
  // Component unmount.
  // ==================

  onCleanup((): void => {
    // Remove `style` tag.
    document.getElementById(styleId)?.remove();
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <For each={getChildren(props)}>
      {(child, index) => {
        // Get child props.
        const { children, isScroll, isScrollBottom } =
          typeof child === 'function' ? child() : child;

        // Set later.
        let div: JSX.Element;

        // Scrollable: YES.
        if (isScroll || isScrollBottom) {
          div = (
            <ScrollVertical
              ariaLabelledby={getTabId(props.id, index())}
              cssRaw={css.raw({
                display: 'none',
              })}
              id={getPanelId(props.id, index())}
              isScrollBottom={isScrollBottom}
              role="tabpanel"
            >
              {children}
            </ScrollVertical>
          );
        }

        // Scrollable: NO.
        if (!isScroll && !isScrollBottom) {
          div = (
            <div
              aria-labelledby={getTabId(props.id, index())}
              class={css({
                display: 'none',
              })}
              id={getPanelId(props.id, index())}
              tabindex={0}
              role="tabpanel"
            >
              {children}
            </div>
          );
        }

        // Expose UI.
        return div;
      }}
    </For>
  );
};

// Export.
export default TabPanelGroup;
