import { cva } from 'styled-system/css';
import { For, Show } from 'solid-js';
import { formatDate } from '~/utils/formatDate';
import Avatar from '~/common/Avatar';
import Bubble from './Bubble';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IReaction {
  count: number;
  emoji: string;
}

export interface ITextListItem {
  reactions?: IReaction[];
  text: string;
}

export interface IChatMessage {
  date?: number;
  image?: string;
  isSelf?: boolean;
  name: string;
  status?: string;
  textList: ITextListItem[];
  variants?: Record<string, string>;
}

// ==========
// Component.
// ==========

const ChatMessage: Component<IChatMessage> = (props) => {
  // ==========
  // Constants.
  // ==========

  const space = ' ';

  // =======================
  // Variants: chat message.
  // =======================

  const cvaChatMessage = cva({
    base: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',

      columnGap: '{spacing.2.5}',
      rowGap: '{spacing.1}',

      '& > figure': {
        gridColumn: '1 / 1',
        gridRow: '2 / 2',
      },
    },
    variants: {
      mode: {
        other: {
          gridTemplateColumns: 'auto 1fr',
        },
        self: {
          alignSelf: 'end',
          gridTemplateColumns: '1fr',
        },
      },
    },
    defaultVariants: {
      mode: 'other',
    },
  });

  // ====================
  // Variants: chat name.
  // ====================

  const cvaChatName = cva({
    base: {
      color: '{colors.neutral.500}',
      fontSize: '{fontSizes.sm}',
      gridRow: '1 / 1',
    },
    variants: {
      mode: {
        other: {
          gridColumn: '2 / 2',
        },
        self: {
          gridColumn: '1 / 1',
          textAlign: 'right',
        },
      },
    },
    defaultVariants: {
      mode: 'other',
    },
  });

  // ====================
  // Variants: text list.
  // ====================

  const cvaChatTextList = cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      gap: '{spacing.1}',

      gridRow: '2 / 2',
      maxWidth: '520px',
    },
    variants: {
      mode: {
        other: {
          gridColumn: '2 / 2',
        },
        self: {
          gridColumn: '1 / 1',
        },
      },
    },
    defaultVariants: {
      mode: 'other',
    },
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <div class={cvaChatMessage(props.variants)}>
      <Show when={props.variants?.mode !== 'self'}>
        <Avatar
          //
          alt={props.name}
          image={props.image}
          status={props.status}
        />
      </Show>

      <div class={cvaChatName(props.variants)}>
        <Show when={!props.variants?.mode}>{props.name} &middot;</Show>
        {space}
        {formatDate(props.date, {
          withTime: true,
        })}
      </div>

      <div class={cvaChatTextList(props.variants)}>
        <For each={props.textList}>
          {({ reactions, text }) => (
            <Bubble
              //
              reactions={reactions}
              text={text}
              variants={props.variants}
            />
          )}
        </For>
      </div>
    </div>
  );
};

// Export.
export default ChatMessage;
