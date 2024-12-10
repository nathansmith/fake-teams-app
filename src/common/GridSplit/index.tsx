import { css } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';

// ==========
// Component.
// ==========
const GridSplit: ParentComponent = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gap: '{spacing.5}',

        // Media query.
        md: {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      })}
    >
      {props.children}
    </div>
  );
};

// Export.
export default GridSplit;
