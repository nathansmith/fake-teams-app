import { css } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';

// ==========
// Component.
// ==========

const Notice: ParentComponent = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      aria-live="polite"
      class={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '{spacing.5}',

        backgroundColor: '{colors.green.50}',
        borderColor: '{colors.green.500}',
        borderStyle: 'solid',
        borderRadius: '{radii.md}',
        borderWidth: '1px',
        padding: '{spacing.5}',
      })}
    >
      {props.children}
    </div>
  );
};

// Export.
export default Notice;
