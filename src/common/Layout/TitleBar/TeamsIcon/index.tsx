import { css } from 'styled-system/css';
import { IconPeopleAudience24 } from '~/icons';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface ITeamsIcon {
  title?: string;
}

// ==========
// Component.
// ==========

const TeamsIcon: Component<ITeamsIcon> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <h1
      class={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '70px',
        height: '50px',

        '& svg': {
          fill: '{colors.indigo.500}',
          width: '24px',
          height: 'auto',
        },
      })}
      aria-label={props.title}
      title={props.title}
    >
      <IconPeopleAudience24 />
    </h1>
  );
};

// Export.
export default TeamsIcon;
