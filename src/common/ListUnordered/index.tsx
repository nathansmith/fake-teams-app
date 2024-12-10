import { css } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';

// ==========
// Component.
// ==========

const ListUnordered: ParentComponent = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <ul
      class={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '{spacing.1}',

        listStyle: 'disc',
        marginLeft: '{spacing.5}',
      })}
    >
      {props.children}
    </ul>
  );
};

// Export.
export default ListUnordered;
