import { css, cva } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface IButton {
  cssRaw?: SystemStyleObject;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variants?: Record<string, string>;
}

// ==========
// Component.
// ==========

const Button: ParentComponent<IButton> = (props) => {
  // =======
  // Events.
  // =======

  const onClick = (): void => {
    if (typeof props.onClick === 'function') {
      props.onClick();
    }
  };

  // =================
  // Variants: button.
  // =================

  const cvaButton = cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '{spacing.2}',

      color: '#000',
      backgroundColor: '#fff',

      borderColor: '{colors.neutral.500}',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '{radii.lg}',

      fontWeight: '600',
      lineHeight: '1',

      paddingTop: '{spacing.2}',
      paddingLeft: '{spacing.4}',
      paddingRight: '{spacing.4}',
      paddingBottom: '{spacing.2}',

      '&:not(:disabled):active': {
        transform: 'translateY(1px)',
      },
    },
    variants: {
      mode: {
        primary: {
          color: '#fff',
          backgroundImage: `
            linear-gradient(
              to top right,
              {colors.indigo.500} 0%,
              {colors.purple.800} 100%
            )
          `,
        },
      },
      size: {
        large: {
          fontSize: '{fontSizes.xl}',
          paddingTop: '{spacing.5}',
          paddingLeft: '{spacing.5}',
          paddingRight: '{spacing.5}',
          paddingBottom: '{spacing.5}',
        },
      },
    },
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <button
      //
      class={css(
        // CVA styles.
        cvaButton.raw(props.variants),

        // Raw styles.
        props.cssRaw
      )}
      disabled={props.disabled}
      onClick={onClick}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

// Export.
export default Button;
