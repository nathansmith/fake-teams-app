import { css } from 'styled-system/css';
import { state } from '~/state';
import type { ParentComponent } from 'solid-js';

// ==========
// Component.
// ==========

const Main: ParentComponent = (props) => {
  // ====================
  // Event: pointer down.
  // ====================

  const onPointerDown = (event: Event): void => {
    // Get target.
    const target = event.target as HTMLElement;

    // Get booleans.
    const isActive =
      state.signalChatSidebarActive.get() && !target.closest('section[data-is-active="true"]');

    // Sidebar active: YES.
    if (isActive) {
      // Update.
      state.signalChatSidebarActive.set(false);
    }
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <main
      class={css({
        gridArea: 'GRID_AREA_MAIN',

        display: 'grid',
        gridTemplateAreas: `
          "GRID_AREA_MAIN_CONTENT"
        `,
        overflow: 'hidden',
        position: 'relative',

        // Media query.
        lg: {
          gridTemplateAreas: `
            "GRID_AREA_MAIN_SIDEBAR GRID_AREA_MAIN_CONTENT"
          `,
          gridTemplateColumns: 'auto 1fr',

          '& > section': {
            '&:nth-of-type(1)': {
              gridArea: 'GRID_AREA_MAIN_SIDEBAR',
            },

            '&:nth-of-type(2)': {
              gridArea: 'GRID_AREA_MAIN_CONTENT',
            },

            '&:only-child': {
              gridColumn: 'span 2',
            },
          },
        },
      })}
      onPointerDown={onPointerDown}
    >
      {props.children}
    </main>
  );
};

// Export.
export default Main;
