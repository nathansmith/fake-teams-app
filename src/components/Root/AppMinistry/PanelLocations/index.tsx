import { css } from 'styled-system/css';
import { For } from 'solid-js';
import Campus from './Campus';
import FlexStack from '~/common/FlexStack';
import type { Component } from 'solid-js';

// =====
// Data.
// =====

import campusList from '~/data/ministry/campusList.json';

// ==========
// Component.
// ==========

const PanelLocations: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <FlexStack
      cssRaw={css.raw({
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px',
      })}
    >
      <h3>Campuses & Service times</h3>

      <For each={campusList}>
        {(item) => (
          <>
            <hr />

            <Campus {...item} />
          </>
        )}
      </For>
    </FlexStack>
  );
};

// Export.
export default PanelLocations;
