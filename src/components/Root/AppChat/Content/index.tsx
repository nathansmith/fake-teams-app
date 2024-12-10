import { css } from 'styled-system/css';
import { createEffect, createSignal, Show } from 'solid-js';
import { formatDate, getRandomId } from '~/utils';
import { IconCall20, IconPeopleAdd20, IconVideo20 } from '~/icons';
import { state } from '~/state';
import ButtonIcon from '~/common/ButtonIcon';
import ChatList from '~/common/ChatList';
import Compose from '~/common/Compose';
import FileList from '~/common/FileList';
import FlexStack from '~/common/FlexStack';
import Header from '~/common/Header';
import PhotoList from '~/common/PhotoList';
import Tab from '~/common/Tab';
import TabList from '~/common/TabList';
import TabPanel from '~/common/TabPanel';
import TabPanelGroup from '~/common/TabPanelGroup';
import type { Component } from 'solid-js';
import type { IConversation } from '~/data/types';

// =====
// Data.
// =====

import { conversation as conversationFusion08b } from '~/data/fusion-08b';
import { conversation as conversationFusion10b } from '~/data/fusion-10b';
import { conversation as conversationIntro } from '~/data/intro';

// ==========
// Component.
// ==========

const Content: Component = () => {
  // ==========
  // Constants.
  // ==========

  const tabListId = getRandomId();

  const conversationObj: Record<string, IConversation> = {
    intro: conversationIntro,
    'fusion-08b': conversationFusion08b,
    'fusion-10b': conversationFusion10b,
  };

  // ============
  // Local state.
  // ============

  const [conversation, setConversation] = createSignal<IConversation>(
    conversationObj[state.signalConversationId.get()]
  );

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Update.
    setConversation(conversationObj[state.signalConversationId.get()]);
  });

  // ==================
  // Event: tab change.
  // ==================

  const onChangeTab = (index: number): void => {
    // Update.
    state.signalConversationTab.set(index);
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <section
      class={css({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
      })}
    >
      <Header
        cssRaw={css.raw({
          gridTemplateColumns: 'repeat(2, auto) 1fr',
        })}
      >
        <h2
          class={css({
            paddingTop: '{spacing.5}',
            paddingBottom: '{spacing.5}',
          })}
        >
          {conversation().title}
        </h2>

        <TabList
          activeIndex={state.signalConversationTab.get()}
          id={tabListId}
          isResponsive={true}
          onChange={onChangeTab}
        >
          <Tab text="Chat" />
          <Tab text="Shared" />
          <Tab text="Photos" />
        </TabList>

        <div
          class={css({
            display: 'flex',
            gap: '{spacing.5}',
            marginLeft: 'auto',
          })}
        >
          <ButtonIcon
            //
            icon={<IconPeopleAdd20 />}
            title="View and add participants"
          >
            20
          </ButtonIcon>

          <ButtonIcon
            //
            icon={<IconVideo20 />}
            title="Video call"
          />

          <ButtonIcon
            //
            icon={<IconCall20 />}
            title="Audio call"
          />
        </div>
      </Header>

      <TabPanelGroup id={tabListId}>
        <TabPanel isScrollBottom={true}>
          <ChatList list={conversation().chatList} />
        </TabPanel>

        <TabPanel isScroll={true}>
          <FileList list={conversation().fileList} />
        </TabPanel>

        <TabPanel isScroll={true}>
          <FlexStack>
            <Show when={state.signalConversationId.get() === 'intro'}>
              <b>UNT design faculty</b>
            </Show>

            <Show when={state.signalConversationId.get() !== 'intro'}>
              <b>
                {formatDate(Date.now(), {
                  month: 'long',
                  withDay: false,
                })}
              </b>
            </Show>

            <PhotoList list={conversation().photoList} />
          </FlexStack>
        </TabPanel>
      </TabPanelGroup>

      <Show when={state.signalConversationTab.get() === 0}>
        <footer
          class={css({
            padding: '{spacing.5}',
          })}
        >
          <Compose />
        </footer>
      </Show>
    </section>
  );
};

// Export.
export default Content;
