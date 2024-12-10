import { css, cva } from 'styled-system/css';
import type { JSX, ParentComponent } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface IButtonIcon {
  cssRaw?: SystemStyleObject;
  disabled?: boolean;
  icon: JSX.Element;
  onClick?: () => void;
  title?: string;
  type?: 'button' | 'reset' | 'submit';
  variants?: Record<string, string>;
}

// ==========
// Component.
// ==========

const ButtonIcon: ParentComponent<IButtonIcon> = (props) => {
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
      gap: '{spacing.1}',

      color: '{colors.neutral.500}',
      fontSize: '{fontSizes.sm}',
      fontWeight: 'bold',

      '&:not(:disabled)': {
        '&:active': {
          transform: 'translateY(1px)',
        },

        '&:focus-visible, &:hover': {
          color: '#000',
        },
      },
    },
    variants: {
      mode: {
        chunky: {
          backgroundColor: '#fff',
          borderColor: '{colors.neutral.300}',
          borderStyle: 'solid',
          borderRadius: '{radii.md}',
          borderWidth: '1px',
          padding: '{spacing.1}',
        },
      },
    },
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <button
      aria-label={props.title}
      class={css(
        // CVA styles.
        cvaButton.raw(props.variants),

        // Raw styles.
        props.cssRaw
      )}
      disabled={props.disabled}
      onClick={onClick}
      title={props.title}
      type={props.type || 'button'}
    >
      {props.icon}
      {props.children}
    </button>
  );
};

// Export.
export default ButtonIcon;
