import { css } from 'styled-system/css';
import FlexStack from '~/common/FlexStack';
import type { ParentComponent } from 'solid-js';

// ======
// Types.
// ======

export interface IDetails {
  open?: boolean;
  summary: string;
}

// ==========
// Component.
// ==========

const Details: ParentComponent<IDetails> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <details
      class={css({
        '& + &': {
          marginTop: '{spacing.5}',
        },
      })}
      open={props.open || undefined}
    >
      <summary
        class={css({
          color: '{colors.neutral.500}',
          cursor: 'pointer',

          overflow: 'hidden',
          textOverflow: 'ellipsis',
          userSelect: 'none',
          whiteSpace: 'nowrap',

          '&:hover': {
            color: '#000',
          },
        })}
      >
        {props.summary}
      </summary>

      <FlexStack
        cssRaw={css.raw({
          gap: '{spacing.2.5}',
          paddingTop: '{spacing.1}',
        })}
      >
        {props.children}
      </FlexStack>
    </details>
  );
};

// Export.
export default Details;
