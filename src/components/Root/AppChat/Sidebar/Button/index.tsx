import { css } from 'styled-system/css';
import { formatDate } from '~/utils';
import Avatar from '~/common/Avatar';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IButton {
  date?: number | string;
  disabled?: boolean;
  image?: string;
  isActive?: boolean;
  name: string;
  onClick?: () => void;
  status?: string;
  text: string;
}

// ==========
// Component.
// ==========

const Button: Component<IButton> = (props) => {
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
      aria-pressed={props.isActive || false}
      class={css({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gridTemplateRows: 'auto auto',
        columnGap: '{spacing.2.5}',

        borderRadius: '{radii.md}',
        padding: '{spacing.2.5}',
        textAlign: 'left',

        '&[aria-pressed="true"]': {
          backgroundColor: '#fff',
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

        '& > figure': {
          gridColumn: '1 / 2',
          gridRow: '1 / 3',
        },
      })}
      disabled={props.disabled}
      onClick={onClick}
      type="button"
    >
      <Avatar
        //
        alt={props.name}
        image={props.image}
        size={48}
        status={props.status}
      />

      <span
        class={css({
          gridColumn: '2 / 3',
          gridRow: '1',

          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        })}
      >
        {props.name}
      </span>

      <span
        class={css({
          color: '{colors.neutral.500}',
          gridColumn: '3 / 4',
          gridRow: '1',
        })}
      >
        {formatDate(props.date)}
      </span>

      <span
        class={css({
          gridColumn: '2 / 4',
          gridRow: '2 / 3',

          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        })}
      >
        {props.text}
      </span>
    </button>
  );
};

// Export.
export default Button;
