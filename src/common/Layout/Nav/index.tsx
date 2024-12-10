import { css } from 'styled-system/css';
import { state } from '~/state';
import {
  IconCalendar24,
  IconAlert24,
  IconChat24,
  IconGiftCardMoney24,
  IconHeartCircleHint28,
  IconPeople24,
  IconSoccer24,
  IconVideo20,
} from '~/icons';
import Button from './Button';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const Nav: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <nav
      class={css({
        gridArea: 'GRID_AREA_NAV',

        display: 'flex',
        gap: '{spacing.1}',
        alignItems: 'center',

        // Horizontal layout.
        borderBottomColor: '{colors.neutral.300}',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        paddingLeft: '{spacing.2.5}',
        paddingRight: '{spacing.2.5}',
        overflowX: 'auto',
        overflowY: 'hidden',

        '&::-webkit-scrollbar': {
          display: 'none',
        },

        // Media query.
        lg: {
          // Vertical layout.
          flexDirection: 'column',
          border: '0',
          borderRightColor: '{colors.neutral.300}',
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          padding: '0',
          paddingTop: '{spacing.2.5}',
          paddingBottom: '{spacing.2.5}',
          overflowX: 'hidden',
          overflowY: 'auto',
        },
      })}
    >
      <Button
        isActive={state.signalAppId.get() === 'chat'}
        onClick={() => state.signalAppId.set('chat')}
        title="Chat"
      >
        <IconChat24 />
      </Button>

      <Button
        isActive={state.signalAppId.get() === 'soccer'}
        onClick={() => state.signalAppId.set('soccer')}
        title="Soccer App"
      >
        <IconSoccer24 />
      </Button>

      <Button
        isActive={state.signalAppId.get() === 'giving'}
        onClick={() => state.signalAppId.set('giving')}
        title="Giving App"
      >
        <IconGiftCardMoney24 />
      </Button>

      <Button
        isActive={state.signalAppId.get() === 'ministry'}
        onClick={() => state.signalAppId.set('ministry')}
        title="Ministry App"
      >
        <IconHeartCircleHint28 />
      </Button>

      <Button disabled={true} title="Activity">
        <IconAlert24 />
      </Button>

      <Button disabled={true} title="Meet">
        <IconVideo20 />
      </Button>

      <Button disabled={true} title="Communities">
        <IconPeople24 />
      </Button>

      <Button disabled={true} title="Calendar">
        <IconCalendar24 />
      </Button>
    </nav>
  );
};

// Export.
export default Nav;
