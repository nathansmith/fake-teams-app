import { css } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface IButtonLink {
  cssRaw?: SystemStyleObject;
  onClick?: () => void;
}

// ==========
// Component.
// ==========

const ButtonLink: ParentComponent<IButtonLink> = (props) => {
  // =============
  // Event: click.
  // =============

  const onClick = (): void => {
    // Callback exists: YES.
    if (typeof props.onClick === 'function') {
      // Fire callback.
      props.onClick();
    }
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <button
      class={css(
        {
          color: '#00f',
          textDecoration: 'underline',
        },
        props.cssRaw
      )}
      onClick={onClick}
      type="button"
    >
      {props.children}
    </button>
  );
};

// Export.
export default ButtonLink;
