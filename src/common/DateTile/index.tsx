import { css, cva } from 'styled-system/css';
import { formatDate } from '~/utils';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IDateTile {
  date: string | number;
  variants?: Record<string, string>;
}

// ==========
// Component.
// ==========

const DateTile: Component<IDateTile> = (props) => {
  // ================
  // Variants: month.
  // ================

  const cvaMonth = cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      color: '#fff',
      backgroundColor: '{colors.blue.400}',

      fontFamily: '"Arial Narrow", sans-serif',
      fontSize: '{fontSizes.2xl}',
      fontWeight: 'bold',
      lineHeight: '1',
      whiteSpace: 'nowrap',

      textAlign: 'center',
      textShadow: '{shadows.text}',
      textTransform: 'uppercase',
    },
    variants: {
      mode: {
        alert: {
          backgroundColor: '{colors.red.400}',
        },
      },
    },
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'inline-grid',
        aspectRatio: '1 / 1',

        borderColor: '{colors.neutral.500}',
        borderRadius: '{radii.md}',
        borderStyle: 'solid',
        borderWidth: '1px',

        overflow: 'hidden',
        width: '5rem',
      })}
    >
      <div class={cvaMonth(props.variants)}>
        {formatDate(props.date, {
          month: 'short',
          withDay: false,
        })}
      </div>

      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          color: '{colors.neutral.500}',
          backgroundColor: '#fff',

          fontSize: '{fontSizes.2xl}',
          fontWeight: 'bold',
          lineHeight: '1',
        })}
      >
        {formatDate(props.date, {
          day: '2-digit',
          withMonth: false,
        })}
      </div>
    </div>
  );
};

// Export.
export default DateTile;
