import { css } from 'styled-system/css';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const Loading: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        letterSpacing: '2px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',

        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      })}
    >
      Loading
    </div>
  );
};

// Export.
export default Loading;
