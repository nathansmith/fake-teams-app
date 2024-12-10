import { css } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';

// ======
// Types.
// ======

export interface IButton {
  disabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  title?: string;
}

// ==========
// Component.
// ==========

const Button: ParentComponent<IButton> = (props) => {
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
      aria-label={props.title}
      aria-pressed={props.isActive || false}
      class={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        color: '#000',
        borderRadius: '{radii.2xl}',
        position: 'relative',

        minWidth: '50px',
        height: '50px',

        '&[aria-pressed="true"]': {
          backgroundColor: '#fff',
        },

        '&:disabled': {
          color: '{colors.neutral.500}',
        },

        '&:focus-visible': {
          zIndex: '1',
        },

        '&:not(:disabled)': {
          '&:active': {
            transform: 'translateY(1px)',
          },

          '&:hover': {
            backgroundColor: '#fff',
            filter: '{shadows.drop}',
            zIndex: '1',
          },
        },
      })}
      disabled={props.disabled}
      onClick={onClick}
      title={props.title}
      type="button"
    >
      {props.children}
    </button>
  );
};

// Export.
export default Button;
