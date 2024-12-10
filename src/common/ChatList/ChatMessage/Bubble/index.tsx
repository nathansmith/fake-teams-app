import { cva } from 'styled-system/css';
import { For, Show } from 'solid-js';
import { textToHtml } from '~/utils';
import FlexStack from '~/common/FlexStack';
import Reaction from './Reaction';
import type { IReaction } from '../';
import type { ParentComponent } from 'solid-js';

// ======
// Types.
// ======

export interface IBubble {
  reactions?: IReaction[];
  text: string;
  variants?: Record<string, string>;
}

// ==========
// Component.
// ==========

const Bubble: ParentComponent<IBubble> = (props) => {
  // =================
  // Variants: bubble.
  // =================

  const cvaBubble = cva({
    base: {
      backgroundImage: `
        linear-gradient(
          to top right,
          {colors.indigo.100} 0%,
          {colors.purple.50} 100%
        )
      `,

      borderRadius: '{radii.lg}',
      padding: '{spacing.5}',
      position: 'relative',

      '&:has([data-reaction-list])': {
        marginBottom: '{spacing.5}',
        paddingBottom: '{spacing.8}',
      },

      '& hr': {
        borderTopColor: 'currentColor',
      },

      '& ol': {
        listStyle: 'decimal',
        marginLeft: '{spacing.5}',
      },

      '& ul': {
        listStyle: 'disc',
        marginLeft: '{spacing.5}',
      },

      '& blockquote': {
        alignSelf: 'start',

        display: 'flex',
        flexDirection: 'column',
        gap: '{spacing.5}',

        color: '#000',
        backgroundColor: '#fff',
        borderRadius: '{radii.md}',
        filter: '{shadows.drop}',

        paddingTop: '{spacing.2.5}',
        paddingLeft: '{spacing.6}',
        paddingRight: '{spacing.4}',
        paddingBottom: '{spacing.2.5}',

        position: 'relative',

        '&:before': {
          content: '""',
          backgroundColor: '{colors.neutral.300}',
          borderRadius: '1px',
          width: '2px',

          position: 'absolute',
          top: '{spacing.1}',
          left: '{spacing.1}',
          bottom: '{spacing.1}',
        },
      },
    },
    variants: {
      mode: {
        self: {
          alignSelf: 'end',
          color: '#fff',

          backgroundImage: `
            linear-gradient(
              to top right,
              {colors.indigo.500} 0%,
              {colors.purple.800} 100%
            )
          `,

          '& a': {
            color: 'inherit',
          },
        },
      },
    },
  });

  // ====================
  // Variants: reactions.
  // ====================

  const cvaReactions = cva({
    base: {
      display: 'flex',
      gap: '{spacing.1}',
      transform: 'translateY(50%)',
      position: 'absolute',
      bottom: '0',
      left: '{spacing.5}',
      right: '{spacing.5}',
    },
    variants: {
      mode: {
        self: {
          justifyContent: 'flex-end',
        },
      },
    },
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <div class={cvaBubble(props.variants)}>
      <FlexStack html={textToHtml(props.text)} />

      <Show when={props.reactions?.length}>
        <div class={cvaReactions(props.variants)} data-reaction-list="true">
          <For each={props.reactions}>{(reaction) => <Reaction {...reaction} />}</For>
        </div>
      </Show>
    </div>
  );
};

// Export.
export default Bubble;
