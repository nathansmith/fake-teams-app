import { css } from 'styled-system/css';
import { IconChevronLeft20, IconChevronRight20, IconDots20 } from '~/icons';
import Avatar from '~/common/Avatar';
import ButtonIcon from '~/common/ButtonIcon';
import Search from './Search';
import TeamsIcon from './TeamsIcon';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const TitleBar: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <header
      class={css({
        gridArea: 'GRID_AREA_TITLE_BAR',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        borderBottomColor: '{colors.neutral.300}',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',

        paddingRight: '{spacing.5}',
      })}
    >
      <TeamsIcon title="Fake Teams" />

      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          gap: '{spacing.5}',

          maxWidth: '500px',
          width: '100%',
        })}
      >
        <ButtonIcon
          //
          disabled={true}
          icon={<IconChevronLeft20 />}
          title="Back"
        />

        <ButtonIcon
          //
          disabled={true}
          icon={<IconChevronRight20 />}
          title="Forward"
        />

        <Search />
      </div>

      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          gap: '{spacing.5}',
          paddingLeft: '{spacing.5}',
        })}
      >
        <ButtonIcon
          //
          icon={<IconDots20 />}
          title="Settings and more"
        />

        <Avatar
          alt="Eusar Naime"
          image="/avatars/webp/soccer-player.webp"
          size={28}
          status="online"
        />
      </div>
    </header>
  );
};

// Export.
export default TitleBar;
