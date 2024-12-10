import { css } from 'styled-system/css';
import { For } from 'solid-js';
import { getRandomStatus } from '~/utils';
import ChatMessage from './ChatMessage';
import FlexStack from '~/common/FlexStack';
import type { Component } from 'solid-js';
import type { IChatMessage } from './ChatMessage';

// ======
// Types.
// ======

export interface IChatList {
  list: IChatMessage[];
}

// ==========
// Component.
// ==========

const ChatList: Component<IChatList> = (props) => {
  // ==========
  // Constants.
  // ==========

  const oneSecond = 1000;
  const oneMinute = 60 * oneSecond;

  // ==========
  // Expose UI.
  // ==========

  return (
    <FlexStack
      cssRaw={css.raw({
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '950px',
      })}
    >
      <For each={props.list}>
        {({ date, image, isSelf, name, status, textList }, index) => {
          // Expose UI.
          return (
            <ChatMessage
              date={date || Date.now() - (props.list?.length - 1 - index()) * oneMinute}
              image={image}
              name={name}
              status={status || getRandomStatus()}
              textList={textList}
              variants={{
                mode: isSelf ? 'self' : 'other',
              }}
            />
          );
        }}
      </For>
    </FlexStack>
  );
};

// Export.
export default ChatList;
