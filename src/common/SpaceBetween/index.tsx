import { css } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';

// ==========
// Component.
// ==========

const SpaceBetween: ParentComponent = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(2, auto)',
        justifyContent: 'space-between',
        gap: '{spacing.5}',

        '& > *': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      })}
    >
      {props.children}
    </div>
  );
};

// Export.
export default SpaceBetween;
