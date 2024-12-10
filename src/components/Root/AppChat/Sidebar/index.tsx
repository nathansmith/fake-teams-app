import { css } from 'styled-system/css';
import { For } from 'solid-js';
import { IconChat20, IconFilter20, IconPeopleAdd20 } from '~/icons';
import { fakeContactList } from './fakeContactList';
import { getRandomStatus } from '~/utils';
import { state } from '~/state';
import Button from './Button';
import ButtonCommon from '~/common/Button';
import ButtonIcon from '~/common/ButtonIcon';
import Details from '~/common/Details';
import Header from '~/common/Header';
import ScrollVertical from '~/common/ScrollVertical';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const Sidebar: Component = () => {
  // ==========
  // Set later.
  // ==========

  let xTouchBefore: number | null = null;
  let yTouchBefore: number | null = null;

  // ===================
  // Event: touch start.
  // ===================

  const onTouchStart = ({ touches }: TouchEvent): void => {
    // Get coordinates.
    xTouchBefore = touches[0].clientX;
    yTouchBefore = touches[0].clientY;
  };

  // =================
  // Event: touch end.
  // =================

  const onTouchEnd = ({ changedTouches }: TouchEvent): void => {
    // Coordinates exists: NO.
    if (typeof xTouchBefore !== 'number' || typeof yTouchBefore !== 'number') {
      // Early exit.
      return;
    }

    // Get coordinates.
    const xTouchAfter = changedTouches[0].clientX;
    const yTouchAfter = changedTouches[0].clientY;

    // Get diff.
    const xTouchDiff = xTouchBefore - xTouchAfter;
    const yTouchDiff = yTouchBefore - yTouchAfter;

    // Horizontal swipe: YES.
    if (50 < xTouchDiff && Math.abs(yTouchDiff) < Math.abs(xTouchDiff)) {
      // Update.
      state.signalChatSidebarActive.set(false);
    }

    // Reset.
    xTouchBefore = null;
    yTouchBefore = null;
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <section
      class={css({
        display: 'flex',
        backgroundColor: '{colors.neutral.100}',
        flexDirection: 'column',
        filter: '{shadows.drop}',
        width: '250px',

        zIndex: '1',
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',

        // Hide.
        opacity: '0',
        transform: `translateX(
          calc(
            -1 * (100% - 5px)
          )
        )`,
        transitionDuration: '0.25s',
        transitionProperty: 'opacity, transform',

        // Show.
        '&:has(:focus-visible), &[data-is-active="true"]': {
          opacity: '1',
          transform: 'translateX(0)',
        },

        // Media query.
        lg: {
          // Show.
          display: 'flex',
          filter: 'none',
          opacity: '1',
          position: 'static',
          transform: 'none',
          transitionProperty: 'none',
          width: '350px',
        },
      })}
      data-is-active={state.signalChatSidebarActive.get()}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    >
      <Header>
        <h2
          class={css({
            paddingTop: '{spacing.5}',
            paddingBottom: '{spacing.5}',
          })}
        >
          Chat
        </h2>

        <div
          class={css({
            display: 'flex',
            gap: '{spacing.2.5}',
            marginLeft: 'auto',
          })}
        >
          <ButtonIcon
            icon={<IconFilter20 />}
            title="Filter"
            variants={{
              mode: 'chunky',
            }}
          />

          <ButtonIcon
            icon={<IconChat20 />}
            title="New chat"
            variants={{
              mode: 'chunky',
            }}
          />
        </div>
      </Header>

      <ScrollVertical>
        <Details open={true} summary="Pinned">
          <Button
            //
            image="/avatars/svg/unt-logo.svg"
            isActive={state.signalConversationId.get() === 'intro'}
            name="🤖 UNT Welcome Bot"
            onClick={() => state.signalConversationId.set('intro')}
            status="online"
            text="Wow, that sounds cool. I will take a look."
          />

          <Button
            //
            image="/avatars/svg/fusion-08b.svg"
            isActive={state.signalConversationId.get() === 'fusion-08b'}
            name="Frisco Fusion 08B"
            onClick={() => state.signalConversationId.set('fusion-08b')}
            text="Thanks for all your support, everyone. It means a lot to the team."
          />

          <Button
            //
            image="/avatars/svg/fusion-10b.svg"
            isActive={state.signalConversationId.get() === 'fusion-10b'}
            name="Frisco Fusion 10B"
            onClick={() => state.signalConversationId.set('fusion-10b')}
            text="Let's give it our all and make this a game to remember!"
          />
        </Details>

        <Details open={true} summary="Recent">
          <Button
            //
            disabled={true}
            image="/avatars/webp/coach-donald.webp"
            name="Coach Donald, Coach Jonas"
            status={getRandomStatus()}
            text="Thanks, I appreciate the carpooling help."
          />

          <Button
            //
            disabled={true}
            image="/avatars/webp/coach-matt.webp"
            name="Coach Matt, Coach Hector"
            status={getRandomStatus()}
            text="Don't forget to fill out the tournament waiver."
          />
        </Details>

        <Details open={false} summary="People you've met with">
          <For each={fakeContactList}>
            {(item) => (
              <Button
                //
                {...item}
                disabled={true}
                status={getRandomStatus()}
              />
            )}
          </For>
        </Details>
      </ScrollVertical>

      <footer
        class={css({
          display: 'flex',
          flexDirection: 'column',
          padding: '{spacing.5}',
        })}
      >
        <ButtonCommon>
          <IconPeopleAdd20 />
          Invite to Teams
        </ButtonCommon>
      </footer>
    </section>
  );
};

// Export.
export default Sidebar;
